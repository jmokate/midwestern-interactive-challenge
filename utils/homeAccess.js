const dbConnect = require('./dbConnect');

queryAllContent = async () => {
    let pool = await dbConnect.connectToDb();
    try {
        const results = await pool.query(
            "SELECT * from home"
        );
        console.table(results);
    } catch (err) {
        console.log('Content not queried ', err);
        return[];
    }
};

module.exports = {queryAllContent};