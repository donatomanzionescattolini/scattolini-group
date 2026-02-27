import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button, Card, Spinner, Badge } from 'react-bootstrap';
import { useTranslation } from '../../i18n.tsx';
import {
  listDesarrolloMedia,
  uploadFileToS3,
  uploadGalleryImage,
  deleteFileFromS3,
  getNextGalleryImageNumber,
  countGalleryImages,
  MediaFile,
  VALID_FILE_TYPES,
} from '../../services/s3';
import './MediaUploadStep.scss';

interface MediaUploadStepProps {
  projectName: string;
  onNumberOfImagesChange: (count: number) => void;
}

export default function MediaUploadStep({ projectName, onNumberOfImagesChange }: MediaUploadStepProps) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>('');
  const [currentMedia, setCurrentMedia] = useState<MediaFile[]>([]);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const galleryInputRef = useRef<HTMLInputElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const bannerInputRef = useRef<HTMLInputElement>(null);

  const baseUrl = `https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${projectName}`;

  const loadCurrentMedia = useCallback(async () => {
    setLoading(true);
    try {
      const files = await listDesarrolloMedia(projectName);
      setCurrentMedia(files);
      const galleryCount = files.filter(f => f.type === 'gallery').length;
      onNumberOfImagesChange(galleryCount);
    } catch (err) {
      console.error('Error loading media:', err);
    } finally {
      setLoading(false);
    }
  }, [projectName, onNumberOfImagesChange]);

  useEffect(() => {
    if (projectName) {
      loadCurrentMedia();
    }
  }, [projectName, loadCurrentMedia]);

  const handleBannerUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file name
    if (file.name.toLowerCase() !== 'banner.jpg') {
      setError(t('pages.editor.media.bannerNameError', 'Banner must be named "banner.jpg"') as string);
      return;
    }

    setUploading(true);
    setError('');
    setUploadProgress(t('pages.editor.media.uploadingBanner', 'Uploading banner...') as string);

    const result = await uploadFileToS3(file, projectName, 'banner');
    
    if (result.success) {
      setSuccess(t('pages.editor.media.bannerUploaded', 'Banner uploaded successfully') as string);
      await loadCurrentMedia();
    } else {
      setError(result.error || 'Upload failed');
    }

    setUploading(false);
    setUploadProgress('');
    if (bannerInputRef.current) bannerInputRef.current.value = '';
  };

  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file name
    if (file.name.toLowerCase() !== 'video.mp4') {
      setError(t('pages.editor.media.videoNameError', 'Video must be named "video.mp4"') as string);
      return;
    }

    setUploading(true);
    setError('');
    setUploadProgress(t('pages.editor.media.uploadingVideo', 'Uploading video...') as string);

    const result = await uploadFileToS3(file, projectName, 'video');
    
    if (result.success) {
      setSuccess(t('pages.editor.media.videoUploaded', 'Video uploaded successfully') as string);
      await loadCurrentMedia();
    } else {
      setError(result.error || 'Upload failed');
    }

    setUploading(false);
    setUploadProgress('');
    if (videoInputRef.current) videoInputRef.current.value = '';
  };

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError('');

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = file.name.toLowerCase();

      // Validate file name
      if (!(VALID_FILE_TYPES.pdfs as readonly string[]).includes(fileName)) {
        setError(`${file.name}: ${t('pages.editor.media.pdfNameError', 'PDF must be named brochure.pdf, hoja.pdf, or planos.pdf')}`);
        continue;
      }

      setUploadProgress(`${t('pages.editor.media.uploading', 'Uploading')} ${file.name}... (${i + 1}/${files.length})`);

      const result = await uploadFileToS3(file, projectName, 'pdf');
      
      if (!result.success) {
        setError(`${file.name}: ${result.error}`);
      }
    }

    setSuccess(t('pages.editor.media.pdfsUploaded', 'PDFs uploaded successfully') as string);
    await loadCurrentMedia();
    setUploading(false);
    setUploadProgress('');
    if (pdfInputRef.current) pdfInputRef.current.value = '';
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError('');

    let nextNumber = await getNextGalleryImageNumber(projectName);
    let uploadedCount = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      // Only accept jpg/jpeg files
      if (!file.type.includes('jpeg') && !file.type.includes('jpg')) {
        setError(`${file.name}: ${t('pages.editor.media.galleryJpgOnly', 'Gallery images must be JPG format')}`);
        continue;
      }

      setUploadProgress(`${t('pages.editor.media.uploading', 'Uploading')} image (${nextNumber}).jpg... (${i + 1}/${files.length})`);

      const result = await uploadGalleryImage(file, projectName, nextNumber);
      
      if (result.success) {
        nextNumber++;
        uploadedCount++;
      } else {
        setError(`${file.name}: ${result.error}`);
      }
    }

    if (uploadedCount > 0) {
      const totalCount = await countGalleryImages(projectName);
      onNumberOfImagesChange(totalCount);
      setSuccess(`${uploadedCount} ${t('pages.editor.media.imagesUploaded', 'images uploaded successfully')}`);
    }

    await loadCurrentMedia();
    setUploading(false);
    setUploadProgress('');
    if (galleryInputRef.current) galleryInputRef.current.value = '';
  };

  const handleDeleteFile = async (file: MediaFile) => {
    if (!confirm(t('pages.editor.media.confirmDelete', 'Are you sure you want to delete this file?') as string)) {
      return;
    }

    const success = await deleteFileFromS3(file.key);
    if (success) {
      await loadCurrentMedia();
      if (file.type === 'gallery') {
        const totalCount = await countGalleryImages(projectName);
        onNumberOfImagesChange(totalCount);
      }
    } else {
      setError(t('pages.editor.media.deleteError', 'Error deleting file') as string);
    }
  };

  const getMediaByType = (type: MediaFile['type']) => currentMedia.filter(f => f.type === type);

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return '';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  if (!projectName) {
    return (
      <div className="alert alert-warning">
        {t('pages.editor.media.noProjectName', 'Please enter a project name first')}
      </div>
    );
  }

  return (
    <div className="media-upload-step">
      {error && (
        <div className="alert alert-danger alert-dismissible mb-3">
          {error}
          <button type="button" className="btn-close" title="Close" aria-label="Close" onClick={() => setError('')}></button>
        </div>
      )}
      
      {success && (
        <div className="alert alert-success alert-dismissible mb-3">
          {success}
          <button type="button" className="btn-close" title="Close" aria-label="Close" onClick={() => setSuccess('')}></button>
        </div>
      )}

      {uploading && (
        <div className="alert alert-info mb-3 d-flex align-items-center">
          <Spinner animation="border" size="sm" className="me-2" />
          {uploadProgress}
        </div>
      )}

      <p className="text-muted small mb-4">
        {t('pages.editor.wizard.desarrollo.mediaInfo', 'Upload files to S3. They will be accessible at:')}
        <br />
        <code>{baseUrl}/</code>
      </p>

      {/* Banner Section */}
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0">
              <i className="fas fa-image me-2"></i>
              {t('pages.editor.media.banner', 'Banner')}
            </h6>
            <Badge bg={getMediaByType('banner').length > 0 ? 'success' : 'secondary'}>
              {getMediaByType('banner').length > 0 ? '✓' : t('pages.editor.media.missing', 'Missing')}
            </Badge>
          </div>
          
          {getMediaByType('banner').map(file => (
            <div key={file.key} className="d-flex align-items-center mb-2 p-2 bg-light rounded">
              <img src={file.url} alt="Banner preview" className="banner-preview" />
              <span className="flex-grow-1 small">{file.name} {formatFileSize(file.size)}</span>
              <Button size="sm" variant="danger" onClick={() => handleDeleteFile(file)}>
                <i className="fas fa-trash"></i>
              </Button>
            </div>
          ))}
          
          <div className="mt-2">
            <input
              ref={bannerInputRef}
              type="file"
              className="form-control form-control-sm"
              accept="image/jpeg"
              onChange={handleBannerUpload}
              disabled={uploading}
              title="Upload banner image"
            />
            <div className="form-text">{t('pages.editor.media.bannerHelp', 'File must be named "banner.jpg"')}</div>
          </div>
        </Card.Body>
      </Card>

      {/* Video Section */}
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0">
              <i className="fas fa-video me-2"></i>
              {t('pages.editor.media.video', 'Video')}
            </h6>
            <Badge bg={getMediaByType('video').length > 0 ? 'success' : 'secondary'}>
              {getMediaByType('video').length > 0 ? '✓' : t('pages.editor.media.missing', 'Missing')}
            </Badge>
          </div>
          
          {getMediaByType('video').map(file => (
            <div key={file.key} className="d-flex align-items-center mb-2 p-2 bg-light rounded">
              <i className="fas fa-file-video fa-2x me-2 text-primary"></i>
              <span className="flex-grow-1 small">{file.name} {formatFileSize(file.size)}</span>
              <Button size="sm" variant="danger" onClick={() => handleDeleteFile(file)}>
                <i className="fas fa-trash"></i>
              </Button>
            </div>
          ))}
          
          <div className="mt-2">
            <input
              ref={videoInputRef}
              type="file"
              className="form-control form-control-sm"
              accept="video/mp4"
              onChange={handleVideoUpload}
              disabled={uploading}
              title="Upload video file"
            />
            <div className="form-text">{t('pages.editor.media.videoHelp', 'File must be named "video.mp4"')}</div>
          </div>
        </Card.Body>
      </Card>

      {/* PDFs Section */}
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0">
              <i className="fas fa-file-pdf me-2"></i>
              {t('pages.editor.media.pdfs', 'PDF Documents')}
            </h6>
            <Badge bg={getMediaByType('pdf').length >= 3 ? 'success' : 'warning'}>
              {getMediaByType('pdf').length}/3
            </Badge>
          </div>
          
          {getMediaByType('pdf').map(file => (
            <div key={file.key} className="d-flex align-items-center mb-2 p-2 bg-light rounded">
              <i className="fas fa-file-pdf fa-2x me-2 text-danger"></i>
              <span className="flex-grow-1 small">{file.name} {formatFileSize(file.size)}</span>
              <a href={file.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-secondary me-1" title="View PDF">
                <i className="fas fa-eye"></i>
                <span className="visually-hidden">View PDF</span>
              </a>
              <Button size="sm" variant="danger" onClick={() => handleDeleteFile(file)}>
                <i className="fas fa-trash"></i>
              </Button>
            </div>
          ))}
          
          <div className="mt-2">
            <input
              ref={pdfInputRef}
              type="file"
              className="form-control form-control-sm"
              accept=".pdf"
              multiple
              onChange={handlePdfUpload}
              disabled={uploading}
              title="Upload PDF files"
            />
            <div className="form-text">
              {t('pages.editor.media.pdfHelp', 'Files must be named: brochure.pdf, hoja.pdf, or planos.pdf')}
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Gallery Section */}
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0">
              <i className="fas fa-images me-2"></i>
              {t('pages.editor.media.gallery', 'Image Gallery')}
            </h6>
            <Badge bg={getMediaByType('gallery').length > 0 ? 'success' : 'secondary'}>
              {getMediaByType('gallery').length} {t('pages.editor.media.images', 'images')}
            </Badge>
          </div>
          
          <div className="d-flex flex-wrap gap-2 mb-3">
            {getMediaByType('gallery').map(file => (
              <div key={file.key} className="position-relative gallery-thumbnail-container">
                <img 
                  src={file.url} 
                  alt={file.name} 
                  className="img-thumbnail gallery-thumbnail" 
                />
                <button
                  type="button"
                  className="btn btn-danger btn-sm gallery-delete-btn"
                  title="Delete image"
                  aria-label="Delete image"
                  onClick={() => handleDeleteFile(file)}
                >
                  ×
                </button>
                <div className="text-center small text-muted gallery-image-name">
                  {file.name.replace('image (', '').replace(').jpg', '')}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-2">
            <input
              ref={galleryInputRef}
              type="file"
              className="form-control form-control-sm"
              accept="image/jpeg"
              multiple
              onChange={handleGalleryUpload}
              disabled={uploading}
              title="Upload gallery images"
            />
            <div className="form-text">
              {t('pages.editor.media.galleryHelp', 'Upload JPG images. They will be automatically renamed to "image (1).jpg", "image (2).jpg", etc.')}
            </div>
          </div>
        </Card.Body>
      </Card>

      {loading && (
        <div className="text-center py-3">
          <Spinner animation="border" size="sm" /> {t('pages.editor.media.loadingMedia', 'Loading current media...')}
        </div>
      )}
    </div>
  );
}
