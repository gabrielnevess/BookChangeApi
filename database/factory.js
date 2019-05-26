'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Hash = use('Hash');

Factory.blueprint('App/Models/Usuario', async (faker) => {
  return {
    va_nome: faker.name(),
    dt_data_nascimento: '1994-09-18',
    va_celular: faker.phone(),
    va_telefone: '',
    va_email: faker.email(),
    va_password: await Hash.make(faker.password()),
    en_genero: (Math.floor(Math.random() * 2) + 1) == 1 ? "masculino" : "feminino",
    va_cpf: faker.cpf(),
  }
})

// Post blueprint
Factory.blueprint('App/Models/Anuncio', (faker) => {
    return {
      va_titulo_livro: faker.sentence(),
      va_autor_livro: faker.name(),
      va_ano_livro: faker.year({min: 1900, max: 2100}),
      en_estado: (Math.floor(Math.random() * 2) + 1) == 1 ? "novo" : "usado",
      en_tipo_anuncio: (Math.floor(Math.random() * 2) + 1) == 1 ? "troca" : "venda",
      en_status_anuncio: (Math.floor(Math.random() * 2) + 1) == 1 ? "ativo" : "desativado",
      en_status_endereco_visivel: (Math.floor(Math.random() * 2) + 1) == 1 ? "ativo" : "desativado",
      va_descricao: faker.paragraph(),
      dt_data_criacao: faker.birthday()
    }
  })
