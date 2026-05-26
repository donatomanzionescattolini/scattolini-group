import React, { useCallback, useEffect, useRef, useState } from "react";
import { Badge, Button, Card, Spinner } from "react-bootstrap";
import { useTranslation } from "../../i18n.tsx";
import {
    AreaMediaFile,
    countAreaCarouselImages,
    deleteFileFromS3,
    getNextAreaCarouselNumber,
    listAreaMedia,
    normalizePathSegment,
    uploadAreaMedia,
} from "../../services/s3";
import "./MediaUploadStep.scss";

interface AreaMediaUploadStepProps {
    areaName: string;
    onNumberOfImagesChange: (count: number) => void;
}

export default function AreaMediaUploadStep({
    areaName,
    onNumberOfImagesChange,
}: AreaMediaUploadStepProps) {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState("");
    const [currentMedia, setCurrentMedia] = useState<AreaMediaFile[]>([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const bannerRef = useRef<HTMLInputElement>(null);
    const firstImageRef = useRef<HTMLInputElement>(null);
    const carouselRef = useRef<HTMLInputElement>(null);

    const safeArea = normalizePathSegment(areaName);
    const baseUrl = `https://pagina-mama.s3.amazonaws.com/assets2/areas/${safeArea}`;

    const loadMedia = useCallback(async () => {
        if (!areaName) return;
        setLoading(true);
        try {
            const files = await listAreaMedia(areaName);
            setCurrentMedia(files);
            const carouselCount = files.filter((f) => f.type === "carousel").length;
            onNumberOfImagesChange(carouselCount);
        } catch (err) {
            console.error("Error loading area media:", err);
        } finally {
            setLoading(false);
        }
    }, [areaName, onNumberOfImagesChange]);

    useEffect(() => {
        if (areaName) loadMedia();
    }, [areaName, loadMedia]);

    const byType = (type: AreaMediaFile["type"]) => currentMedia.filter((f) => f.type === type);

    const formatSize = (bytes?: number) => {
        if (!bytes) return "";
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const handleBannerUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        setError("");
        setUploadProgress(String(t("pages.editor.media.uploadingBanner", "Uploading banner...")));
        const result = await uploadAreaMedia(file, areaName, "banner");
        if (result.success) {
            setSuccess(`Banner uploaded → ${result.targetName}`);
            await loadMedia();
        } else {
            setError(result.error || "Upload failed");
        }
        setUploading(false);
        setUploadProgress("");
        if (bannerRef.current) bannerRef.current.value = "";
    };

    const handleFirstImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        setError("");
        setUploadProgress(String(t("pages.editor.media.uploadingFirstImage", "Uploading first image...")));
        const result = await uploadAreaMedia(file, areaName, "firstImage");
        if (result.success) {
            setSuccess(`First image uploaded → ${result.targetName}`);
            await loadMedia();
        } else {
            setError(result.error || "Upload failed");
        }
        setUploading(false);
        setUploadProgress("");
        if (firstImageRef.current) firstImageRef.current.value = "";
    };

    const handleCarouselUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        setUploading(true);
        setError("");

        let nextNum = await getNextAreaCarouselNumber(areaName);
        let uploaded = 0;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (!file.type.startsWith("image/")) {
                setError(`${file.name}: must be an image`);
                continue;
            }
            setUploadProgress(`Uploading carousel-${nextNum}.jpg (${i + 1}/${files.length})...`);
            const result = await uploadAreaMedia(file, areaName, "carousel", { carouselNumber: nextNum });
            if (result.success) {
                nextNum++;
                uploaded++;
            } else {
                setError(`${file.name}: ${result.error}`);
            }
        }

        if (uploaded > 0) {
            const total = await countAreaCarouselImages(areaName);
            onNumberOfImagesChange(total);
            setSuccess(`${uploaded} carousel image(s) uploaded.`);
        }

        await loadMedia();
        setUploading(false);
        setUploadProgress("");
        if (carouselRef.current) carouselRef.current.value = "";
    };

    const handleDelete = async (file: AreaMediaFile) => {
        if (!confirm(String(t("pages.editor.media.confirmDelete", "Delete this file?")))) return;
        const ok = await deleteFileFromS3(file.key);
        if (ok) {
            await loadMedia();
            if (file.type === "carousel") {
                const total = await countAreaCarouselImages(areaName);
                onNumberOfImagesChange(total);
            }
        } else {
            setError(String(t("pages.editor.media.deleteError", "Error deleting file")));
        }
    };

    if (!areaName) {
        return (
            <div className="alert alert-warning">
                {t("pages.editor.media.noAreaName", "Please enter an area name (slug) first.")}
            </div>
        );
    }

    return (
        <div className="media-upload-step">
            {error && (
                <div className="alert alert-danger alert-dismissible mb-3">
                    {error}
                    <button type="button" className="btn-close" onClick={() => setError("")} />
                </div>
            )}
            {success && (
                <div className="alert alert-success alert-dismissible mb-3">
                    {success}
                    <button type="button" className="btn-close" onClick={() => setSuccess("")} />
                </div>
            )}
            {uploading && (
                <div className="alert alert-info mb-3 d-flex align-items-center">
                    <Spinner animation="border" size="sm" className="me-2" />
                    {uploadProgress}
                </div>
            )}

            <p className="text-muted small mb-4">
                {t("pages.editor.wizard.area.mediaInfo", "Upload files to S3. They will be accessible at:")}
                <br />
                <code>{baseUrl}/</code>
            </p>

            {/* Banner */}
            <Card className="mb-3">
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="mb-0">
                            <i className="fas fa-image me-2"></i>
                            {t("pages.editor.media.banner", "Banner")}
                            <span className="text-muted small ms-2">(banner.jpg)</span>
                        </h6>
                        <Badge bg={byType("banner").length > 0 ? "success" : "secondary"}>
                            {byType("banner").length > 0 ? "✓" : t("pages.editor.media.missing", "Missing")}
                        </Badge>
                    </div>
                    <p className="small text-muted mb-2">
                        {t("pages.editor.media.areaBannerInfo", "Full-width background image shown at the top of the area page.")}
                    </p>
                    {byType("banner").map((f) => (
                        <div key={f.key} className="d-flex align-items-center mb-2 p-2 bg-light rounded">
                            <img src={f.url} alt="banner" className="banner-preview" />
                            <span className="flex-grow-1 small">{f.name} {formatSize(f.size)}</span>
                            <Button size="sm" variant="danger" onClick={() => handleDelete(f)}>
                                <i className="fas fa-trash"></i>
                            </Button>
                        </div>
                    ))}
                    <input
                        ref={bannerRef}
                        type="file"
                        className="form-control form-control-sm mt-2"
                        accept="image/*"
                        onChange={handleBannerUpload}
                        disabled={uploading}
                        title="Upload banner"
                    />
                    <div className="form-text">
                        {t("pages.editor.media.areaBannerHelp", "Any image — saved as banner.jpg. Recommended: wide landscape (1920×600 px).")}
                    </div>
                </Card.Body>
            </Card>

            {/* First Image */}
            <Card className="mb-3">
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="mb-0">
                            <i className="fas fa-image me-2"></i>
                            {t("pages.editor.media.firstImage", "First Image")}
                            <span className="text-muted small ms-2">(firstImage.jpg)</span>
                        </h6>
                        <Badge bg={byType("firstImage").length > 0 ? "success" : "secondary"}>
                            {byType("firstImage").length > 0 ? "✓" : t("pages.editor.media.missing", "Missing")}
                        </Badge>
                    </div>
                    <p className="small text-muted mb-2">
                        {t("pages.editor.media.firstImageInfo", "Shown beside the area description text.")}
                    </p>
                    {byType("firstImage").map((f) => (
                        <div key={f.key} className="d-flex align-items-center mb-2 p-2 bg-light rounded">
                            <img src={f.url} alt="first image" className="banner-preview" />
                            <span className="flex-grow-1 small">{f.name} {formatSize(f.size)}</span>
                            <Button size="sm" variant="danger" onClick={() => handleDelete(f)}>
                                <i className="fas fa-trash"></i>
                            </Button>
                        </div>
                    ))}
                    <input
                        ref={firstImageRef}
                        type="file"
                        className="form-control form-control-sm mt-2"
                        accept="image/*"
                        onChange={handleFirstImageUpload}
                        disabled={uploading}
                        title="Upload first image"
                    />
                    <div className="form-text">
                        {t("pages.editor.media.firstImageHelp", "Any image — saved as firstImage.jpg. Recommended: portrait or square (800×1000 px).")}
                    </div>
                </Card.Body>
            </Card>

            {/* Carousel Images */}
            <Card className="mb-3">
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="mb-0">
                            <i className="fas fa-images me-2"></i>
                            {t("pages.editor.media.carouselImages", "Carousel Images")}
                            <span className="text-muted small ms-2">(carousel-1.jpg, carousel-2.jpg, ...)</span>
                        </h6>
                        <Badge bg={byType("carousel").length > 0 ? "success" : "secondary"}>
                            {byType("carousel").length} {t("pages.editor.media.images", "images")}
                        </Badge>
                    </div>
                    <p className="small text-muted mb-2">
                        {t("pages.editor.media.carouselInfo", "These appear in the horizontal scroll strip. numberOfImages is updated automatically.")}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-2">
                        {byType("carousel")
                            .sort((a, b) => (a.carouselNumber ?? 0) - (b.carouselNumber ?? 0))
                            .map((f) => (
                                <div key={f.key} className="position-relative gallery-thumbnail-container">
                                    <img src={f.url} alt={f.name} className="img-thumbnail gallery-thumbnail" />
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm gallery-delete-btn"
                                        title="Delete"
                                        onClick={() => handleDelete(f)}
                                    >×</button>
                                    <div className="text-center small text-muted gallery-image-name">
                                        {f.carouselNumber}
                                    </div>
                                </div>
                            ))}
                    </div>

                    <input
                        ref={carouselRef}
                        type="file"
                        className="form-control form-control-sm mt-2"
                        accept="image/*"
                        multiple
                        onChange={handleCarouselUpload}
                        disabled={uploading}
                        title="Upload carousel images"
                    />
                    <div className="form-text">
                        {t("pages.editor.media.carouselHelp", "Select multiple images at once. Each is saved as carousel-N.jpg and appended after existing images.")}
                    </div>
                </Card.Body>
            </Card>

            {loading && (
                <div className="text-center py-3">
                    <Spinner animation="border" size="sm" />{" "}
                    {t("pages.editor.media.loadingMedia", "Loading current media...")}
                </div>
            )}
        </div>
    );
}

