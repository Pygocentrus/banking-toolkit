const iban = require('./src/modules/iban');
const sortCode = require('./src/modules/sortCode');

// sortCode.isValid({ accountNumber: '02355688', sortCode: '309070' });
// sortCode.isValid({ accountNumber: '12345112', sortCode: '074456' });
sortCode.isValid({ accountNumber: '46238510', sortCode: '871427' });
// sortCode.isValid({ accountNumber: '63748472', sortCode: '202959' });
// sortCode.isValid({ accountNumber: '66374958', sortCode: '089999' });

// iban.isValid('FR7630001007941234567890185')
