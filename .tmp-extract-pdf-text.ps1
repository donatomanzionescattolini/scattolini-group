$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Runtime.WindowsRuntime

[void][Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
[void][Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime]
[void][Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]
[void][Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime]
[void][Windows.Graphics.Imaging.SoftwareBitmap, Windows.Graphics.Imaging, ContentType = WindowsRuntime]
[void][Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType = WindowsRuntime]

$script:AsTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and $_.IsGenericMethod -and $_.GetParameters().Count -eq 1
} | Select-Object -First 1)

function Await([object]$Operation, [Type]$ResultType) {
    $task = $script:AsTaskGeneric.MakeGenericMethod($ResultType).Invoke($null, @($Operation))
    $task.Wait()
    return $task.Result
}

function AwaitAction([object]$Operation) {
    $task = [System.WindowsRuntimeSystemExtensions]::AsTask($Operation)
    $task.Wait()
}

$pdfPath = Join-Path $PSScriptRoot '.tmp-doppio-brochure.pdf'
$outPath = Join-Path $PSScriptRoot '.tmp-doppio-brochure.txt'

$file = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath)) ([Windows.Storage.StorageFile])
$pdf = Await ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)) ([Windows.Data.Pdf.PdfDocument])
$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if (-not $engine) {
    throw 'Could not create OCR engine from user profile languages.'
}

Set-Content -Path $outPath -Value @("Pages: $($pdf.PageCount)", '')

for ($i = 0; $i -lt $pdf.PageCount; $i++) {
    $page = $pdf.GetPage([uint32]$i)
    try {
        $stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
        $renderOptions = New-Object Windows.Data.Pdf.PdfPageRenderOptions
        $renderOptions.DestinationWidth = [uint32]([Math]::Round($page.Size.Width * 3))
        $renderOptions.DestinationHeight = [uint32]([Math]::Round($page.Size.Height * 3))
        AwaitAction ($page.RenderToStreamAsync($stream, $renderOptions))
        $stream.Seek(0)
        $decoder = Await ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
        $bitmap = Await ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
        $ocrBitmap = [Windows.Graphics.Imaging.SoftwareBitmap]::Convert($bitmap, [Windows.Graphics.Imaging.BitmapPixelFormat]::Gray8)
        $ocrResult = Await ($engine.RecognizeAsync($ocrBitmap)) ([Windows.Media.Ocr.OcrResult])

        Add-Content -Path $outPath -Value @(
            "===== PAGE $($i + 1) =====",
            $ocrResult.Text,
            ''
        )
    }
    finally {
        if ($page) { $page.Dispose() }
    }
}

