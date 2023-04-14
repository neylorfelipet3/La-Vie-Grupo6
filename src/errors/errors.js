export const ERROR_TYPE_EMAIL = "O campo 'email' deve ser uma string";
export const ERROR_INVALID_EMAIL =
  "O campo 'email' deve ter um email válido, sem espaços e com menos de 70 caracteres";
export const ERROR_DUPLICATE_EMAIL = (email) => `O email ${email} já existe`;

export const ERROR_SIZE_NAME =
  "O nome precisa conter mais que 3 letras e menos que 100 letras";
export const ERROR_TYPE_NAME = "O campo 'nome' deve ser uma string";

export const ERROR_NOT_EXIST_BIO = "É preciso ter  um texto de 'apresentação'.";
export const ERROR_SIZE_BIO =
  "A apresentação precisa ter menos de 700 caracteres";
export const ERROR_TYPE_BIO = "O campo 'apresentação' deve ser uma string";

export const ERROR_INVALID_AGE =
  "O campo 'idade' deve ser uma data válida no formato YYYY-MM-DD";

export const ERROR_INVALID_ID = "Id não encontrado";

export const ERROR_INVALID_CREDENCIALS =
  "E-mail ou senha inválido, verifique e tente novamente";

export const ERROR_INVALID_PASSWORD_TYPE = "A senha deve ser uma string";
export const ERROR_PASSWORD_SIZE =
  "A senha deve conter no minimo 6 e no máximo 30 caracteres";

  export const ERROR_NOT_EXIST_NOTES = "É preciso ter  um texto de 'observação'.";
export const ERROR_SIZE_NOTES =
  "A observação precisa ter menos de 700 caracteres";
export const ERROR_TYPE_NOTES = 'O campo "observação" deve ser uma string';

export const ERROR_INVALID_DATE =
  'O campo "data_atendimento" deve estar no formato ISO_8601, ex: 2020-01-01T10:10:00z';