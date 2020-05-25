function Conta() {
  var NmCrntst;
  var Banco;
  var NumConta;
  var Saldo;

  this.getNmCrntst = function() { return NmCrntst; }
  this.setNmCrntst = function(value) { NmCrntst = value; }

  this.getBanco = function() { return Banco; }
  this.setBanco = function(value) { Banco = value; }

  this.getNumConta = function() { return NumConta; }
  this.setNumConta = function(value) { NumConta = value; }

  this.getSaldo = function() { return Saldo; }
  this.setSaldo = function(value) { Saldo = value; }
}

function Corrente() {
  var SaldoEspecial;

  this.getSaldoEspecial = function() { return SaldoEspecial; }
  this.setSaldoEspecial = function(value) { SaldoEspecial = value; }
}

function Poupanca() {
  var Juros;
  var DtVencimento;

  this.getJuros = function() { return Juros; }
  this.setJuros = function(value) { Juros = value; }

  this.getDtVencimento = function() { return DtVencimento; }
  this.setDtVencimento = function(value) { DtVencimento = value; }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();