'use strict';

const agg = require('aws-kinesis-agg');
const ion = require('ion-js');

module.exports = {
    parseKinesisRecords: async function (records) {
        const events = [];
        for (const record of records) {
            const parsedRecords = await this.deAggregateKinesisRecords(record);
            for (const record of parsedRecords) {
                events.push(this.ionToJson(ion.load(Buffer.from(record.data, 'base64'))));
            }
        }
console.log(events);
        return events;
    },
    deAggregateKinesisRecords: async (record) => new Promise((resolve, reject) => {
        agg.deaggregateSync(record, true, (err, records) => {
            if (err) {
                return reject(err);
            }

            return resolve(records);
        });
    }),
    ionToJson: (data) => JSON.parse(JSON.stringify(data)),
};
