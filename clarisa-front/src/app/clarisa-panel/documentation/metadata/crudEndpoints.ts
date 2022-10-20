export const json: any = {
  1: {
    update: {
      endpoint: 'api/cgiar-entities/update',
      fields: [
        {
          attr: 'name',
          dataType: 'text',
          fieldType: 'input',
          requied: true,
          placeholder: 'Entity name',
          label: 'Entity Name',
          description: '',
          maxWords: '',
          readOnly: false,
        },
        {
          attr: 'acronym',
          dataType: 'text',
          fieldType: 'input',
          requied: true,
          placeholder: 'Entity acronym',
          label: 'Entity acronym',
          description: '',
          maxWords: '',
          readOnly: false,
        },
        {
          attr: 'global_unit_type_id',
          fieldType: 'dropdown',
          requied: true,
          placeholder: 'Entity acronym',
          label: 'Entity acronym',
          description: '',
          readOnly: false,
          options: {
            endpoint: 'api/cgiar-entity-types',
            optionLabel: 'name',
            optionValue: 'id',
          },
        },
      ],
    },
  },
};

/* "name: string;

    acronym: string;
  
    smo_code: string;
  
    financial_code: string;
  
    global_unit_type_id: number;"*/
