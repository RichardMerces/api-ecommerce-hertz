import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { config } from 'process';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Ecommerce Hertz')
  .setDescription('Nosso projeto é um ecommerce baseado na ODS de numero 7, energia acessivel e limpa, é focado em popularizar a energia renovável para pessoas de todas as classes sociais. Pretendemos vender nessa loja virtual produtos e serviços que facilitam a vida de quem os obter, como um carregador de celular portátil com uma mini placa solar, um carregador de celular a base de energia hidraulica e placas de energia solar com um preço mais acessível, que vai ajudar a diminuir o preço da conta de luz e popularizar a energia renovável. Nosso projeto foi desenvolvido em NESTJS e utilizando o banco de dados (MySQL) para armazenar diversas informações nas tabelas, tais como, Usuarios: Aqui iremos registrar e separar quem serão os clientes e os administradores, que poderâo controlar as quantidades de produtos que entram no carrinho ou adicionar mais produtos no estoque. Produtos: Aqui iremos registrar o produto, com nome, descrição, preço e foto, que serão separados por categorias. Categoria: Onde iremos definir seu tipo, por exemplo, produtos de energia solar, serviços de energia solar etc.')
  .setContact("Hertz","https://github.com/RichardMerces/api-ecommerce-hertz.git","contato.hertz.ecommerce@gmail.com")
  .setContact("Richard / Mariana / Franciele / Davi / Henrique / Taiana","https://github.com/RichardMerces/api-ecommerce-hertz/tree/deploy","")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app,config);
SwaggerModule.setup('/swagger',app,document);

  process.env.TZ = '-03:00'

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors()
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
