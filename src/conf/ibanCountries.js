const ibanCountries = [{
    size: 28,
    format: '8n,16c',
    fields: 'ALkk bbbs sssx cccc cccc cccc cccc',
    country: 'AL'
  },
  {
    size: 24,
    format: '8n,12c',
    fields: 'ADkk bbbb ssss cccc cccc cccc',
    country: 'AD'
  },
  {
    size: 20,
    format: '16n',
    fields: 'ATkk bbbb bccc cccc cccc',
    country: 'AT'
  },
  {
    size: 28,
    format: '4c,20n',
    fields: 'AZkk bbbb cccc cccc cccc cccc cccc ',
    country: 'AZ'
  },
  {
    size: 22,
    format: '4a,14c',
    fields: 'BHkk bbbb cccc cccc cccc cc',
    country: 'BH'
  },
  {
    size: 28,
    format: '4c, 20n',
    fields: 'BYkk bbbb aaaa cccc cccc cccc cccc',
    country: 'BY'
  },
  {
    size: 16,
    format: '12n',
    fields: 'BEkk bbbc cccc ccxx',
    country: 'BE'
  },
  {
    size: 20,
    format: '16n',
    fields: 'BAkk bbbs sscc cccc ccxx',
    country: 'BA'
  },
  {
    size: 29,
    format: '23n,1a,1c',
    fields: 'BRkk bbbb bbbb ssss sccc cccc ccct n',
    country: 'BR'
  },
  {
    size: 22,
    format: '4a,6n,8c',
    fields: 'BGkk bbbb ssss ttcc cccc cc',
    country: 'BG'
  },
  {
    size: 22,
    format: '18n',
    fields: 'CRkk 0bbb cccc cccc cccc cc',
    country: 'CR'
  },
  {
    size: 21,
    format: '17n',
    fields: 'HRkk bbbb bbbc cccc cccc c',
    country: 'HR'
  },
  {
    size: 28,
    format: '8n,16c',
    fields: 'CYkk bbbs ssss cccc cccc cccc cccc',
    country: 'CY'
  },
  {
    size: 24,
    format: '20n',
    fields: 'CZkk bbbb ssss sscc cccc cccc',
    country: 'CZ'
  },
  {
    size: 18,
    format: '14n',
    fields: 'DKkk bbbb cccc cccc cc',
    country: 'DK'
  },
  {
    size: 28,
    format: '4a,20n',
    fields: 'DOkk bbbb cccc cccc cccc cccc cccc',
    country: 'DO'
  },
  {
    size: 23,
    format: '19n',
    fields: 'TLkk bbbc cccc cccc cccc cxx',
    country: 'TL'
  },
  {
    size: 20,
    format: '16n',
    fields: 'EEkk bbss cccc cccc cccx',
    country: 'EE'
  },
  {
    size: 18,
    format: '14n',
    fields: 'FOkk bbbb cccc cccc cx',
    country: 'FO'
  },
  {
    size: 18,
    format: '14n',
    fields: 'FIkk bbbb bb cc cccc cx',
    country: 'FI'
  },
  {
    size: 27,
    format: '10n,11c,2n',
    fields: 'FRkk bbbb b sss sscc cccc cccc cxx',
    country: 'FR'
  },
  {
    size: 22,
    format: '2c,16n',
    fields: 'GEkk bbcc cccc cccc cccc cc',
    country: 'GE'
  },
  {
    size: 22,
    format: '18n',
    fields: 'DEkk bbbb bbbb cccc cccc cc',
    country: 'DE'
  },
  {
    size: 23,
    format: '4a,15c',
    fields: 'GIkk bbbb cccc cccc cccc ccc',
    country: 'GI'
  },
  {
    size: 27,
    format: '7n,16c',
    fields: 'GRkk bbbs sssc cccc cccc cccc ccc',
    country: 'GR'
  },
  {
    size: 18,
    format: '14n',
    fields: 'GLkk bbbb cccc cccc cc',
    country: 'GL'
  },
  {
    size: 28,
    format: '4c,20c',
    fields: 'GTkk bbbb mmtt cccc cccc cccc cccc',
    country: 'GT'
  },
  {
    size: 28,
    format: '24n',
    fields: 'HUkk bbbs sssx cccc cccc cccc cccx',
    country: 'HU'
  },
  {
    size: 26,
    format: '22n',
    fields: 'ISkk bbbb sscc cccc iiii iiii ii',
    country: 'IS'
  },
  {
    size: 22,
    format: '4c,14n',
    fields: 'IEkk aaaa bbbb bbcc cccc cc',
    country: 'IE'
  },
  {
    size: 23,
    format: '19n',
    fields: 'ILkk bbbn nncc cccc cccc ccc',
    country: 'IL'
  },
  {
    size: 27,
    format: '1a,10n,12c',
    fields: 'ITkk xbbb bbss sssc cccc cccc ccc',
    country: 'IT'
  },
  {
    size: 30,
    format: '4a,22n',
    fields: 'JOkk bbbb ssss cccc cccc cccc cccc cc',
    country: 'JO'
  },
  {
    size: 20,
    format: '3n,13c',
    fields: 'KZkk bbbc cccc cccc cccc',
    country: 'KZ'
  },
  {
    size: 20,
    format: '4n,10n,2n',
    fields: 'XKkk bbbb cccc cccc cccc',
    country: 'XK'
  },
  {
    size: 30,
    format: '4a,22c',
    fields: 'KWkk bbbb cccc cccc cccc cccc cccc cc',
    country: 'KW'
  },
  {
    size: 21,
    format: '4a,13c',
    fields: 'LVkk bbbb cccc cccc cccc c',
    country: 'LV'
  },
  {
    size: 28,
    format: '4n,20c',
    fields: 'LBkk bbbb cccc cccc cccc cccc cccc',
    country: 'LB'
  },
  {
    size: 21,
    format: '5n,12c',
    fields: 'LIkk bbbb bccc cccc cccc c',
    country: 'LI'
  },
  {
    size: 20,
    format: '16n',
    fields: 'LTkk bbbb bccc cccc cccc',
    country: 'LT'
  },
  {
    size: 20,
    format: '3n,13c',
    fields: 'LUkk bbbc cccc cccc cccc',
    country: 'LU'
  },
  {
    size: 19,
    format: '3n,10c,2n',
    fields: 'MKkk bbbc cccc cccc cxx',
    country: 'MK'
  },
  {
    size: 31,
    format: '4a,5n,18c',
    fields: 'MTkk bbbb ssss sccc cccc cccc cccc ccc',
    country: 'MT'
  },
  {
    size: 27,
    format: '23n',
    fields: 'MRkk bbbb bsss sscc cccc cccc cxx',
    country: 'MR'
  },
  {
    size: 30,
    format: '4a,19n,3a',
    fields: 'MUkk bbbb bbss cccc cccc cccc 000m mm',
    country: 'MU'
  },
  {
    size: 27,
    format: '10n,11c,2n',
    fields: 'MCkk bbbb bsss sscc cccc cccc cxx',
    country: 'MC'
  },
  {
    size: 24,
    format: '2c,18c',
    fields: 'MDkk bbcc cccc cccc cccc cccc',
    country: 'MD'
  },
  {
    size: 22,
    format: '18n',
    fields: 'MEkk bbbc cccc cccc cccc xx',
    country: 'ME'
  },
  {
    size: 18,
    format: '4a,10n',
    fields: 'NLkk bbbb cccc cccc cc',
    country: 'NL'
  },
  {
    size: 15,
    format: '11n',
    fields: 'NOkk bbbb cccc ccx',
    country: 'NO'
  },
  {
    size: 24,
    format: '4c,16n',
    fields: 'PKkk bbbb cccc cccc cccc cccc',
    country: 'PK'
  },
  {
    size: 29,
    format: '4c,21n',
    fields: 'PSkk bbbb xxxx xxxx xccc cccc cccc c',
    country: 'PS'
  },
  {
    size: 28,
    format: '24n',
    fields: 'PLkk bbbs sssx cccc cccc cccc cccc',
    country: 'PL'
  },
  {
    size: 25,
    format: '21n',
    fields: 'PTkk bbbb ssss cccc cccc cccx x',
    country: 'PT'
  },
  {
    size: 29,
    format: '4a,21c',
    fields: 'QAkk bbbb cccc cccc cccc cccc cccc c',
    country: 'QA'
  },
  {
    size: 24,
    format: '4a,16c',
    fields: 'ROkk bbbb cccc cccc cccc cccc',
    country: 'RO'
  },
  {
    size: 27,
    format: '1a,10n,12c',
    fields: 'SMkk xbbb bbss sssc cccc cccc ccc',
    country: 'SM'
  },
  {
    size: 24,
    format: '2n,18c',
    fields: 'SAkk bbcc cccc cccc cccc cccc',
    country: 'SA'
  },
  {
    size: 22,
    format: '18n',
    fields: 'RSkk bbbc cccc cccc cccc xx',
    country: 'RS'
  },
  {
    size: 24,
    format: '20n',
    fields: 'SKkk bbbb ssss sscc cccc cccc',
    country: 'SK'
  },
  {
    size: 19,
    format: '15n',
    fields: 'SIkk bbss sccc cccc cxx',
    country: 'SI'
  },
  {
    size: 24,
    format: '20n',
    fields: 'ESkk bbbb ssss xxcc cccc cccc',
    country: 'ES'
  },
  {
    size: 24,
    format: '20n',
    fields: 'SEkk bbbc cccc cccc cccc cccc',
    country: 'SE'
  },
  {
    size: 21,
    format: '5n,12c',
    fields: 'CHkk bbbb bccc cccc cccc c',
    country: 'CH'
  },
  {
    size: 24,
    format: '20n',
    fields: 'TNkk bbss sccc cccc cccc cccc',
    country: 'TN'
  },
  {
    size: 26,
    format: '5n,17c',
    fields: 'TRkk bbbb bxcc cccc cccc cccc cc',
    country: 'TR'
  },
  {
    size: 23,
    format: '3n,16n',
    fields: 'AEkk bbbc cccc cccc cccc ccc',
    country: 'AE'
  },
  {
    size: 22,
    format: '4a,14n',
    fields: 'GBkk bbbb ssss sscc cccc cc',
    country: 'GB'
  },
  {
    size: 24,
    format: '4c,16n',
    fields: 'VGkk bbbb cccc cccc cccc cccc',
    country: 'VG'
  }
];

module.exports = ibanCountries;
