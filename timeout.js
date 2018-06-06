module.exports.sleep = sleep;
module.exports.timeout = timeout;

function sleep(interval) {
    return new Promise(resolve => setTimeout(
        () => {
            console.log(`slept for ${interval} ms`);
            resolve();
        },
        interval
    ));
}

function timeout(p, t) {
    const failure = new Promise( (resolve, reject) => {
        setTimeout(() => reject('timed out'), t)
    });
    // Catching promise rejection to avoid UnhandledPromiseRejectionWarning
    return Promise.race([failure, p]).catch((e) => e);
}