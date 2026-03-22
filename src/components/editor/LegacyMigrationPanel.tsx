import {useMemo, useState} from "react";
import {Alert, Button, Card, Stack} from "react-bootstrap";
import {useTranslation} from "../../i18n";
import {replaceDynamicAreas} from "../../objects/areas/Areas";
import {replaceDynamicDesarrollos} from "../../objects/desarrollos/Desarrollos";
import {getAllAreas, getAllDesarrollos, saveAreasBatch, saveDesarrollosBatch} from "../../services/database";
import {getLegacyContentSummary} from "../../services/legacyContent";

export default function LegacyMigrationPanel() {
    const {t} = useTranslation();
    const [migrating, setMigrating] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

    const summary = useMemo(() => getLegacyContentSummary(), []);

    const handleMigrate = async () => {
        const confirmed = window.confirm(
            `${t('pages.editor.migration.confirm', 'This will import the legacy file-based areas and developments into Firestore using merge writes. Existing Firestore documents with the same IDs will be updated. Do you want to continue?')}\n\n` +
            `${t('pages.editor.tabs.areas', 'Areas')}: ${summary.areaCount}\n` +
            `${t('pages.editor.tabs.desarrollos', 'Developments')}: ${summary.desarrolloCount}`
        );

        if (!confirmed) return;

        setMigrating(true);
        setMessage("");
        setMessageType('');

        try {
            await saveAreasBatch(summary.areas);
            await saveDesarrollosBatch(summary.desarrollos);

            const [areas, desarrollos] = await Promise.all([
                getAllAreas(),
                getAllDesarrollos(),
            ]);

            replaceDynamicAreas(areas as any);
            replaceDynamicDesarrollos(desarrollos as any);

            setMessage(
                String(
                    t(
                        'pages.editor.migration.success',
                        `Migration completed successfully. Imported ${summary.areaCount} areas and ${summary.desarrolloCount} developments into Firestore.`
                    )
                )
            );
            setMessageType('success');
        } catch (error) {
            console.error('Error migrating legacy content:', error);
            setMessage(String(t('pages.editor.migration.error', 'The legacy content migration failed. Check your Firebase configuration and permissions, then try again.')));
            setMessageType('error');
        } finally {
            setMigrating(false);
        }
    };

    return (
        <Card className="mb-4 border-warning-subtle">
            <Card.Body>
                <Stack gap={3}>
                    <div>
                        <h4 className="mb-1">{t('pages.editor.migration.title', 'Legacy content migration')}</h4>
                        <p className="text-muted mb-0">
                            {t(
                                'pages.editor.migration.description',
                                'Import the existing file-based areas and developments into Firestore so content can be managed from the database.'
                            )}
                        </p>
                    </div>

                    <div className="small text-muted">
                        <strong>{t('pages.editor.migration.summary', 'Ready to import')}:</strong>{' '}
                        {summary.areaCount} {t('pages.editor.tabs.areas', 'Areas').toString().toLowerCase()}, {summary.desarrolloCount} {t('pages.editor.tabs.desarrollos', 'Developments').toString().toLowerCase()}.
                    </div>

                    {message && (
                        <Alert variant={messageType === 'success' ? 'success' : 'danger'} className="mb-0">
                            {message}
                        </Alert>
                    )}

                    <div>
                        <Button variant="warning" onClick={handleMigrate} disabled={migrating}>
                            {migrating
                                ? t('pages.editor.migration.running', 'Migrating...')
                                : t('pages.editor.migration.run', 'Import legacy content into Firestore')}
                        </Button>
                    </div>
                </Stack>
            </Card.Body>
        </Card>
    );
}
