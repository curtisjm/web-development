import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

function init() {
    Sentry.init({
        dsn: 'https://72a2dea3f7c640eeb61748869457918a@o953957.ingest.sentry.io/5902897',
        integrations: [new Integrations.BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    })
}

function log(error: any) {
    Sentry.captureException(error)
}

export default {
    init,
    log,
}
