/**
 * Update the starter teamType userLimit to 3
 *
 */

module.exports = {
    up: async (context) => {
        const properties = await context.sequelize.query('select "properties" from "TeamTypes" where "name" = \'starter\'', { type: context.sequelize.QueryTypes.SELECT })
        if (properties.length > 0) {
            const starterProperties = JSON.parse(properties[0].properties)
            if (starterProperties.userLimit !== 3) {
                starterProperties.userLimit = 3
                await context.sequelize.query(`update "TeamTypes" set "properties" = '${JSON.stringify(starterProperties)}' where "name" = 'starter'`)
            }
        }
    },
    down: async (context) => {
    }
}
