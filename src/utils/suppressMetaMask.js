export const suppressMetaMaskErrors = () => {
    if (typeof window === 'undefined') return;

    const shouldSuppress = (msg) => {
        return typeof msg === 'string' && (
            msg.toLowerCase().includes('metamask') ||
            msg.toLowerCase().includes('failed to connect') ||
            msg.toLowerCase().includes('receiving end does not exist')
        );
    };

    const originalConsoleError = console.error;
    console.error = (...args) => {
        const firstArg = args[0];
        if (shouldSuppress(firstArg)) return;
        if (firstArg && firstArg.message && shouldSuppress(firstArg.message)) return;
        originalConsoleError.apply(console, args);
    };

    window.addEventListener('error', (event) => {
        if (shouldSuppress(event.message)) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }, true);

    window.addEventListener('unhandledrejection', (event) => {
        const reason = event.reason;
        const msg = reason?.message || reason?.toString ? reason.toString() : Reason;

        if (shouldSuppress(msg)) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }, true);
};
