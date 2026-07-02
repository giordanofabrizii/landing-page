exports.handler = async function(event, context) {
    const keyStatus = true;

    return {
        statusCode: 200,
        body: JSON.stringify({ key_status: keyStatus })
    };
}