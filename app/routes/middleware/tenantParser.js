const TENANT_HEADER = 'x-tenant-id';
const tenantParser = (request, response, next) => {
    const tenantId = request.header(TENANT_HEADER);
    if (tenantId) {
        request.tenantId = tenantId;
        next();
    } else {
        return response.status(400).json(`Missing ${TENANT_HEADER} header`);
    }
};
module.exports = {
    tenantParser,
};
