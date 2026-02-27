$files = Get-ChildItem -Path src -Include *.tsx,*.ts -Recurse
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding utf8
    if ($content.Contains('Ã')) {
        Write-Output "Fixing $($file.FullName)"
        $content = $content.Replace('Ã¡', 'á')
        $content = $content.Replace('Ã©', 'é')
        $content = $content.Replace('Ã­', 'í')
        $content = $content.Replace('Ã³', 'ó')
        $content = $content.Replace('Ãº', 'ú')
        $content = $content.Replace('Ã±', 'ñ')
        $content = $content.Replace('Ã', 'Á')
        $content = $content.Replace('Ã', 'É')
        $content = $content.Replace('Ã', 'Í')
        $content = $content.Replace('Ã', 'Ó')
        $content = $content.Replace('Ã', 'Ú')
        $content = $content.Replace('Ã', 'Ñ')
        $content = $content.Replace('Ã ', 'à')
        $content = $content.Replace('Ã¨', 'è')
        $content = $content.Replace('Ã¬', 'ì')
        $content = $content.Replace('Ã²', 'ò')
        $content = $content.Replace('Ã¹', 'ù')
        Set-Content $file.FullName $content -Encoding utf8
    }
}
