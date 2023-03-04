'use strict';

const qldb = require('../../utility/qldb');

module.exports.handle = async (records) => qldb.parseKinesisRecords(records);
