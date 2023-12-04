// const { initializeApp } = require("firebase/app");
// const { getStorage, ref, uploadBytes } = require("firebase/storage");
// // const fs = require('fs');
// import RNFS from 'react-native-fs';
// import RNHTMLtoPDF from 'react-native-html-to-pdf';

// function getRandomHash() {
//     let randomHash = "";
//     const randomNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));
//     randomHash = randomNumbers.join("");
//     return randomHash;
// }

// function aleluia(company_ie, company_ie_st, company_cnpj_cpf, client_receiver_name, client_neighborhood, client_cep, invoice_issue, client_address, client_city_name, client_uf, client_ie, transport_amount_transported_volumes, transport_type_volumes_transported, client_phone_number, total, jsonprodutos) {
//     // Exemplo de uso:
//     serie = getRandomHash()
//     vl_total = total
//     pesoliquido = (10 * transport_amount_transported_volumes)
//     pesobruto = pesoliquido + (0.100 * transport_amount_transported_volumes)

//     produtos = JSON.parse(jsonprodutos)
//     let htmlString = ""; // Inicialize uma string vazia para armazenar o HTML

//     produtos.forEach(prod => {
//         // Use a variável htmlString para acumular o HTML
//         htmlString += `
//     <tr class="titles">
//       <th class="cod" style="width: 15.5mm">CÓDIGO</th>
//       <th class="descrit" style="width: 66.1mm">${prod.produto}</th>
//       <th class="ncmsh">05</th>
//       <th class="cst">030</th> 
//       <th class="cfop">5.102</th>
//       <th class="un">Caixas</th>
//       <th class="amount">${prod.quantidade}</th>  
//       <th class="valUnit">${prod.valor}</th>              
//       <th class="valTotal">${prod.quantidade * prod.valor}</th>   
//       <th class="bcIcms">0,00</th>
//       <th class="valIcms">0,00</th>
//       <th class="valIpi">0,00</th>
//       <th class="aliqIcms">0,00</th>
//       <th class="aliqIpi">0,00</th>
//     </tr>`;
//     });

//     // Agora a variável htmlString contém o HTML para todos os produtos
//     console.log(htmlString);

//     const htmlContent = `<!-- Header -->
// <style type="text/css">
//     @media print {
//         @page {
//             margin-left: 15mm;
//             margin-right: 15mm;
//         }
//     }

//     * {
//         margin: 0;
//     }

//     .ui-widget-content {
//         border: none !important;
//     }

//     .nfe-square {
//         margin: 0 auto 2cm;
//         box-sizing: border-box;
//         width: 2cm;
//         height: 1cm;
//         border: 1px solid #000;
//     }

//     .nfeArea.page {
//         width: 18cm;
//         position: relative;
//         font-family: "Times New Roman", serif;
//         color: #000;
//         margin: 0 auto;
//         overflow: hidden;
//     }

//     .nfeArea .font-12 {
//         font-size: 12pt;
//     }

//     .nfeArea .font-8 {
//         font-size: 8pt;
//     }

//     .nfeArea .bold {
//         font-weight: bold;
//     }
//     /* == TABELA == */
//     .nfeArea .area-name {
//         font-family: "Times New Roman", serif;
//         color: #000;
//         font-weight: bold;
//         margin: 5px 0 0;
//         font-size: 6pt;
//         text-transform: uppercase;
//     }

//     .nfeArea .txt-upper {
//         text-transform: uppercase;
//     }

//     .nfeArea .txt-center {
//         text-align: center;
//     }

//     .nfeArea .txt-right {
//         text-align: right;
//     }

//     .nfeArea .nf-label {
//         text-transform: uppercase;
//         margin-bottom: 3px;
//         display: block;
//     }

//         .nfeArea .nf-label.label-small {
//             letter-spacing: -0.5px;
//             font-size: 4pt;
//         }

//     .nfeArea .info {
//         font-weight: bold;
//         font-size: 8pt;
//         display: block;
//         line-height: 1em;
//     }

//     .nfeArea table {
//         font-family: "Times New Roman", serif;
//         color: #000;
//         font-size: 5pt;
//         border-collapse: collapse;
//         width: 100%;
//         border-color: #000;
//         border-radius: 5px;
//     }

//     .nfeArea .no-top {
//         margin-top: -1px;
//     }

//     .nfeArea .mt-table {
//         margin-top: 3px;
//     }

//     .nfeArea .valign-middle {
//         vertical-align: middle;
//     }

//     .nfeArea td {
//         vertical-align: top;
//         box-sizing: border-box;
//         overflow: hidden;
//         border-color: #000;
//         padding: 1px;
//         height: 5mm;
//     }

//     .nfeArea .tserie {
//         width: 32.2mm;
//         vertical-align: middle;
//         font-size: 8pt;
//         font-weight: bold;
//     }

//         .nfeArea .tserie span {
//             display: block;
//         }

//         .nfeArea .tserie h3 {
//             display: inline-block;
//         }

//     .nfeArea .entradaSaida .legenda {
//         text-align: left;
//         margin-left: 2mm;
//         display: block;
//     }

//         .nfeArea .entradaSaida .legenda span {
//             display: block;
//         }

//     .nfeArea .entradaSaida .identificacao {
//         float: right;
//         margin-right: 2mm;
//         border: 1px solid black;
//         width: 5mm;
//         height: 5mm;
//         text-align: center;
//         padding-top: 0;
//         line-height: 5mm;
//     }

//     .nfeArea .hr-dashed {
//         border: none;
//         border-top: 1px dashed #444;
//         margin: 5px 0;
//     }

//     .nfeArea .client_logo {
//         height: 27.5mm;
//         width: 28mm;
//         margin: 0.5mm;
//     }

//     .nfeArea .title {
//         font-size: 10pt;
//         margin-bottom: 2mm;
//     }

//     .nfeArea .txtc {
//         text-align: center;
//     }

//     .nfeArea .pd-0 {
//         padding: 0;
//     }

//     .nfeArea .mb2 {
//         margin-bottom: 2mm;
//     }

//     .nfeArea table table {
//         margin: -1pt;
//         width: 100.5%;
//     }

//     .nfeArea .wrapper-table {
//         margin-bottom: 2pt;
//     }

//         .nfeArea .wrapper-table table {
//             margin-bottom: 0;
//         }

//             .nfeArea .wrapper-table table + table {
//                 margin-top: -1px;
//             }

//     .nfeArea .boxImposto {
//         table-layout: fixed;
//     }

//         .nfeArea .boxImposto td {
//             width: 11.11%;
//         }

//         .nfeArea .boxImposto .nf-label {
//             font-size: 5pt;
//         }

//         .nfeArea .boxImposto .info {
//             text-align: right;
//         }

//     .nfeArea .wrapper-border {
//         border: 1px solid #000;
//         border-width: 0 1px 1px;
//         height: 75.7mm;
//     }

//         .nfeArea .wrapper-border table {
//             margin: 0 -1px;
//             width: 100.4%;
//         }

//     .nfeArea .content-spacer {
//         display: block;
//         height: 10px;
//     }

//     .nfeArea .titles th {
//         padding: 3px 0;
//     }

//     .nfeArea .listProdutoServico td {
//         padding: 0;
//     }

//     .nfeArea .codigo {
//         display: block;
//         text-align: center;
//         margin-top: 5px;
//     }

//     .nfeArea .boxProdutoServico tr td:first-child {
//         border-left: none;
//     }

//     .nfeArea .boxProdutoServico td {
//         font-size: 6pt;
//         height: auto;
//     }

//     .nfeArea .boxFatura span {
//         display: block;
//     }

//     .nfeArea .boxFatura td {
//         border: 1px solid #000;
//     }

//     .nfeArea .freteConta .border {
//         width: 5mm;
//         height: 5mm;
//         text-align: center;
//         line-height: 5mm;
//         border: 1px solid black;
//     }

//     .nfeArea .freteConta .info {
//         line-height: 5mm;
//     }

//     .page .boxFields td p {
//         font-family: "Times New Roman", serif;
//         font-size: 5pt;
//         line-height: 1.2em;
//         color: #000;
//     }

//     .nfeArea .imgCanceled {
//         position: absolute;
//         top: 75mm;
//         left: 30mm;
//         z-index: 3;
//         opacity: 0.8;
//         display: none;
//     }

//     .nfeArea.invoiceCanceled .imgCanceled {
//         display: block;
//     }

//     .nfeArea .imgNull {
//         position: absolute;
//         top: 75mm;
//         left: 20mm;
//         z-index: 3;
//         opacity: 0.8;
//         display: none;
//     }

//     .nfeArea.invoiceNull .imgNull {
//         display: block;
//     }

//     .nfeArea.invoiceCancelNull .imgCanceled {
//         top: 100mm;
//         left: 35mm;
//         display: block;
//     }

//     .nfeArea.invoiceCancelNull .imgNull {
//         top: 65mm;
//         left: 15mm;
//         display: block;
//     }

//     .nfeArea .block {
//         display: block;
//     }

//     .label-mktup {
//         font-family: Arial !important;
//         font-size: 8px !important;
//         padding-top: 8px !important;
//     }
// </style>
// <!-- /Header -->
// <script src="../teste.js" ></script>
// <!-- Recebimentos -->
// <div class="page nfeArea">
//     <img class="imgCanceled" src="tarja_nf_cancelada.png" alt="" />
//     <img class="imgNull" src="tarja_nf_semvalidade.png" alt="" />
//     <div class="boxFields" style="padding-top: 20px;">
//         <table cellpadding="0" cellspacing="0" border="1">
//             <tbody>
//                 <tr>
//                     <td colspan="2" class="txt-upper">
//                         Recebemos de Démeter LTDA os produtos e serviços constantes na nota fiscal indicada ao lado
//                     </td>
//                     <td rowspan="2" class="tserie txt-center">
//                         <span class="font-12" style="margin-bottom: 5px;">NF-e</span>
//                         <span>Nº `+ serie + `</span>
//                         <span>Série 1</span>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td style="width: 32mm">
//                         <span class="nf-label">Data de recebimento</span>
//                     </td>
//                     <td style="width: 124.6mm">
//                         <span class="nf-label">Identificação de assinatura do Recebedor</span>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//         <hr class="hr-dashed" />
//         <table cellpadding="0" cellspacing="0" border='1'>
//             <tbody>
//                 <tr>
//                     <td rowspan="3" style="width: 30mm">
//                         <img class="client_logo" src="https://github.com/Robis123/Demeter/blob/nodeJS/template/icon3.png?raw=true" alt="" onerror=" javascript:this.src='data:image/png;base64,'"/>
//                     </td>
//                     <td rowspan="3" style="width: 46mm; font-size: 7pt;" class="txt-center">
//                         <span class="mb2 bold block">Deméter</span>
//                         <span class="block">SEPN 707/907</span>
//                         <span class="block">
//                         Asa norte - cep:70790-075
//                         </span>
//                         <span class="block">
//                             Brasília - DF- Fone: (61) 3966-1201
//                         </span>
//                     </td>
//                     <td rowspan="3" class="txtc txt-upper" style="width: 34mm; height: 29.5mm;">
//                         <h3 class="title">Danfe</h3>
//                         <p class="mb2">Documento auxiliar da Nota Fiscal Eletrônica </p>
//                         <p class="entradaSaida mb2">
//                             <span class="identificacao">
//                                 <span>1</span>
//                             </span>
//                             <span class="legenda">
//                                 <span>0 - Entrada</span>
//                                 <span>1 - Saída</span>
//                             </span>
//                         </p>
//                         <p>
//                             <span class="block bold">
//                                 <span>Nº</span>
//                                 <span>`+ serie + `</span>
//                             </span>
//                             <span class="block bold">
//                                 <span>SÉRIE:</span>
//                                 <span>1</span>
//                             </span>
//                             <span class="block">
//                                 <span>Página</span>
//                                 <span>1</span>
//                                 <span>de</span>
//                                 <span>1</span>
//                             </span>
//                         </p>
//                     </td>
//                     <td class="txt-upper" style="width: 85mm;">
//                         <span class="nf-label">Controle do Fisco</span>
//                         <span class="codigo">{BarCode}</span>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         <span class="nf-label">CHAVE DE ACESSO</span>
//                         <span class="bold block txt-center info">[ds_danfe]</span>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td class="txt-center valign-middle">
//                         <span class="block">Consulta de autenticidade no portal nacional da NF-e </span> www.nfe.fazenda.gov.br/portal ou no site da Sefaz Autorizada.
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//         <!-- Natureza da Operação -->
//         <table cellpadding="0" cellspacing="0" class="boxNaturezaOperacao no-top" border="1">
//             <tbody>
//                 <tr>
//                     <td>
//                         <span class="nf-label">NATUREZA DA OPERAÇÃO</span>
//                         <span class="info">Venda</span>
//                     </td>
//                     <td style="width: 84.7mm;">
//                         <span class="nf-label">protocolo de homologação</span>
//                         <span class="info">12345678901234567890</span>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>

//         <!-- Inscrição -->
//         <table cellpadding="0" cellspacing="0" class="boxInscricao no-top" border="1">
//             <tbody>
//                 <tr>
//                     <td>
//                         <span class="nf-label">INSCRIÇÃO ESTADUAL</span>
//                         <span class="info">`+ company_ie + `</span>
//                     </td>
//                     <td style="width: 67.5mm;">
//                         <span class="nf-label">INSCRIÇÃO ESTADUAL DO SUBST. TRIB.</span>
//                         <span class="info">`+ company_ie_st + `</span>
//                     </td>
//                     <td style="width: 64.3mm">
//                         <span class="nf-label">CNPJ</span>
//                         <span class="info">12.123.123/1234-12</span>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>

//         <!-- Destinatário/Emitente -->
//         <p class="area-name">Destinatário/Emitente</p>
//         <table cellpadding="0" cellspacing="0" class="boxDestinatario" border="1">
//             <tbody>
//                 <tr>
//                     <td class="pd-0">
//                         <table cellpadding="0" cellspacing="0" border="1">
//                             <tbody>
//                                 <tr>
//                                     <td>
//                                         <span class="nf-label">NOME/RAZÃO SOCIAL</span>
//                                         <span class="info">`+ client_receiver_name + `</span>
//                                     </td>
//                                     <td style="width: 40mm">
//                                         <span class="nf-label">CNPJ/CPF</span>
//                                         <span class="info">`+ company_cnpj_cpf + `</span>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </td>
//                     <td style="width: 22mm">
//                         <span class="nf-label">DATA DE EMISSÃO</span>
//                         <span class="info">`+ invoice_issue + `</span>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td class="pd-0">
//                         <table cellpadding="0" cellspacing="0" border="1">
//                             <tbody>
//                                 <tr>
//                                     <td>
//                                         <span class="nf-label">ENDEREÇO</span>
//                                         <span class="info">`+ client_address + `</span>
//                                     </td>
//                                     <td style="width: 47mm;">
//                                         <span class="nf-label">BAIRRO/DISTRITO</span>
//                                         <span class="info">`+ client_neighborhood + `</span>
//                                     </td>
//                                     <td style="width: 37.2 mm">
//                                         <span class="nf-label">CEP</span>
//                                         <span class="info">`+ client_cep + `</span>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </td>
//                     <td>
//                         <span class="nf-label">DATA DE ENTR./SAÍDA</span>
//                         <span class="info">`+ invoice_issue + `</span>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td class="pd-0">
//                         <table cellpadding="0" cellspacing="0" style="margin-bottom: -1px;" border="1">
//                             <tbody>
//                                 <tr>
//                                     <td>
//                                         <span class="nf-label">MUNICÍPIO</span>
//                                         <span class="info">`+ client_city_name + `</span>
//                                     </td>
//                                     <td style="width: 34mm">
//                                         <span class="nf-label">FONE/FAX</span>
//                                         <span class="info">`+ client_phone_number + `</span>
//                                     </td>
//                                     <td style="width: 28mm">
//                                         <span class="nf-label">UF</span>
//                                         <span class="info">`+ client_uf + `</span>
//                                     </td>
//                                     <td style="width: 51mm">
//                                         <span class="nf-label">INSCRIÇÃO ESTADUAL</span>
//                                         <span class="info">`+ client_ie + `</span>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </td>
//                     <td>
//                         <span class="nf-label">HORA ENTR./SAÍDA</span>
//                         <span id="info"></span>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//         <!-- Fatura -->
//         <div class="boxFatura">
//             <p class="area-name"></p>
//             FATURA
//         </div>

//         <!-- Calculo do Imposto -->
//         <p class="area-name">Calculo do imposto</p>
//         <div class="wrapper-table">
//             <table cellpadding="0" cellspacing="0" border="1" class="boxImposto">
//                 <tbody>
//                     <tr>
//                         <td>
//                             <span class="nf-label label-small">BASE DE CÁLC. DO ICMS</span>
//                             <span class="info">`+ vl_total + `</span>
//                         </td>
//                         <td>
//                             <span class="nf-label">VALOR DO ICMS</span>
//                             <span class="info">0,00</span>
//                         </td>
//                         <td>
//                             <span class="nf-label label-small" style="font-size: 4pt;">BASE DE CÁLC. DO ICMS ST</span>
//                             <span class="info">0,00</span>
//                         </td>
//                         <td>
//                             <span class="nf-label">VALOR DO ICMS ST</span>
//                             <span class="info">0,00</span>
//                         </td>
//                         <td>
//                             <span class="nf-label label-small">V. IMP. IMPORTAÇÃO</span>
//                             <span class="info"></span>
//                         </td>
//                         <td>
//                             <span class="nf-label label-small">V. ICMS UF REMET.</span>
//                             <span class="info"></span>
//                         </td>
//                         <td>
//                             <span class="nf-label">VALOR DO FCP</span>
//                             <span class="info">0,00</span>
//                         </td>
//                         <td>
//                             <span class="nf-label">VALOR DO PIS</span>
//                             <span class="info"></span>
//                         </td>
//                         <td>
//                             <span class="nf-label label-small">V. TOTAL DE PRODUTOS</span>
//                             <span class="info"> `+ vl_total + `</span>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <span class="nf-label">VALOR DO FRETE</span>
//                             <span class="info">0,00</span>
//                         </td>
//                         <td>
//                             <span class="nf-label">VALOR DO SEGURO</span>
//                             <span class="info">0,00</span>
//                         </td>
//                         <td>
//                             <span class="nf-label">DESCONTO</span>
//                             <span class="info">0,00</span>
//                         </td>
//                         <td>
//                             <span class="nf-label">OUTRAS DESP.</span>
//                             <span class="info">0,00</span>
//                         </td>
//                         <td>
//                             <span class="nf-label">VALOR DO IPI</span>
//                             <span class="info">0,00</span>
//                         </td>
//                         <td>
//                             <span class="nf-label">V. ICMS UF DEST.</span>
//                             <span class="info"></span>
//                         </td>
//                         <td>
//                             <span class="nf-label label-small">V. APROX. DO TRIBUTO</span>
//                             <span class="info">0,00</span>
//                         </td>
//                         <td>
//                             <span class="nf-label label-small">VALOR DA CONFINS</span>
//                             <span class="info"></span>
//                         </td>
//                         <td>
//                             <span class="nf-label label-small">V. TOTAL DA NOTA</span>
//                             <span class="info">`+ vl_total + `</span>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//         <!-- Transportador/Volumes transportados -->
//         <p class="area-name">Transportador/volumes transportados</p>
//         <table cellpadding="0" cellspacing="0" border="1">
//             <tbody>
//                 <tr>
//                     <td>
//                         <span class="nf-label">RAZÃO SOCIAL</span>
//                         <span class="info">Deméter Transportadora</span>
//                     </td>
//                     <td class="freteConta" style="width: 32mm">
//                         <span class="nf-label">FRETE POR CONTA</span>
//                         <div class="border">
//                             <span class="info">1</span>
//                         </div>
//                         <p>0 - Emitente</p>
//                         <p>1 - Destinatário</p>
//                     </td>
//                     <td style="width: 17.3mm">
//                         <span class="nf-label">CÓDIGO ANTT</span>
//                         <span class="info">049856894(homol)</span>
//                     </td>
//                     <td style="width: 24.5mm">
//                         <span class="nf-label">PLACA</span>
//                         <span class="info">HMJ-0298</span>
//                     </td>
//                     <td style="width: 11.3mm">
//                         <span class="nf-label">UF</span>
//                         <span class="info">DF</span>
//                     </td>
//                     <td style="width: 29.5mm">
//                         <span class="nf-label">CNPJ/CPF</span>
//                         <span class="info">12.123.123/1234-12</span>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//         <table cellpadding="0" cellspacing="0" border="1" class="no-top">
//             <tbody>
//                 <tr>
//                     <td class="field endereco">
//                         <span class="nf-label">ENDEREÇO</span>
//                         <span class="content-spacer info">cep:70790-075
//                         </span>
//                     </td>
//                     <td style="width: 32mm">
//                         <span class="nf-label">MUNICÍPIO</span>
//                         <span class="info">Brasília</span>
//                     </td>
//                     <td style="width: 31mm">
//                         <span class="nf-label">UF</span>
//                         <span class="info">DF</span>
//                     </td>
//                     <td style="width: 51.4mm">
//                         <span class="nf-label">INSC. ESTADUAL</span>
//                         <span class="info">123456789</span>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//         <table cellpadding="0" cellspacing="0" border="1" class="no-top">
//             <tbody>
//                 <tr>
//                     <td class="field quantidade">
//                         <span class="nf-label">QUANTIDADE</span>
//                         <span class="content-spacer info">`+ transport_amount_transported_volumes + `</span>
//                     </td>
//                     <td style="width: 31.4mm">
//                         <span class="nf-label">ESPÉCIE</span>
//                         <span class="info">`+ transport_type_volumes_transported + `</span>
//                     </td>
//                     <td style="width: 31mm">
//                         <span class="nf-label">MARCA</span>
//                         <span class="info"></span>
//                     </td>
//                     <td style="width: 31.5mm">
//                         <span class="nf-label">NUMERAÇÃO</span>
//                         <span class="info"></span>
//                     </td>
//                     <td style="width: 31.5mm">
//                         <span class="nf-label">PESO BRUTO</span>
//                         <span class="info">`+ pesobruto + 'kg' + `</span>
//                     </td>
//                     <td style="width: 32.5mm">
//                         <span class="nf-label">PESO LÍQUIDO</span>
//                     <span class="info">`+ pesoliquido + 'kg' + `</span>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//         <!-- Dados do produto/serviço -->
//         <p class="area-name">Dados do produto/serviço</p>
//         <div class="wrapper-border">
//             <table cellpadding="0" cellspacing="0" border="1" class="boxProdutoServico">
//                 <thead class="listProdutoServico" id="table">
//                     <tr class="titles">
//                         <th class="cod" style="width: 15.5mm">CÓDIGO</th>
//                         <th class="descrit" style="width: 66.1mm">DESCRIÇÃO DO PRODUTO/SERVIÇO</th>
//                         <th class="ncmsh">NCMSH</th>
//                         <th class="cst">CST</th>
//                         <th class="cfop">CFOP</th>
//                         <th class="un">UN</th>
//                         <th class="amount">QTD.</th>
//                         <th class="valUnit">VLR.UNIT</th>
//                         <th class="valTotal">VLR.TOTAL</th>
//                         <th class="bcIcms">BC ICMS</th>
//                         <th class="valIcms">VLR.ICMS</th>
//                         <th class="valIpi">VLR.IPI</th>
//                         <th class="aliqIcms">ALIQ.ICMS</th>
//                         <th class="aliqIpi">ALIQ.IPI</th>
//                     </tr>
//                     `+ htmlString + `
//                 </thead>
//                 <tbody>  
//                     items:
//                 </tbody>
//             </table>
//         </div>

//         <!-- Calculo de ISSQN -->
//         <p class="area-name">Calculo do issqn</p>
//         <table cellpadding="0" cellspacing="0" border="1" class="boxIssqn">
//             <tbody>
//                 <tr>
//                     <td class="field inscrMunicipal">
//                         <span class="nf-label">INSCRIÇÃO MUNICIPAL</span>
//                         <span class="info txt-center">123456789</span>
//                     </td>
//                     <td class="field valorTotal">
//                         <span class="nf-label">VALOR TOTAL DOS SERVIÇOS</span>
//                         <span class="info txt-right">0,00</span>
//                     </td>
//                     <td class="field baseCalculo">
//                         <span class="nf-label">BASE DE CÁLCULO DO ISSQN</span>
//                         <span class="info txt-right">0,00</span>
//                     </td>
//                     <td class="field valorIssqn">
//                         <span class="nf-label">VALOR DO ISSQN</span>
//                         <span class="info txt-right">0,00</span>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>

//         <!-- Dados adicionais -->
//         <p class="area-name">Dados adicionais</p>
//         <table cellpadding="0" cellspacing="0" border="1" class="boxDadosAdicionais">
//             <tbody>
//                 <tr>
//                     <td class="field infoComplementar">
//                         <span class="nf-label">INFORMAÇÕES COMPLEMENTARES</span>
//                         <span>Essa é uma nota fiscal eletronica SEM VALIDADE JURIDICA, feita apenas para demonstração do sistema em ambiente estudantil,
//                         apesar de seguir normas e regras gerais para a emissão de nota a mesma não possui validação do ISS.NET
//                         </span>
//                     </td>
//                     <td class="field reservaFisco" style="width: 85mm; height: 24mm">
//                         <span class="nf-label">RESERVA AO FISCO</span>
//                         <span></span>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
                            
//         <footer>
//             <table cellpadding="0" cellspacing="0">
//                 <tbody>
//                     <tr>
//                         <td style="text-align: right"><strong>Empresa de Software www.demetertccbr.online</strong></td>
//                     </tr>
//                 </tbody>
//             </table>
//         </footer>
//     </div>
// </div>
// `;

//     const outputPath = getRandomHash() + '.pdf';
//     // CHAMA GERARPDF

//     // const options = { format: 'Letter' };

//     // pdf.create(htmlString, options).toFile(outputPath, (err, resposta) => {
//     //     if (err) return console.log(err);
//     //     console.log(`PDF gerado em: ${resposta.filename}`);
//     // Options for PDF generation
//     const options = {
//         html: htmlContent,
//         fileName: outputPath,
//         directory: 'Documents',
//     };

//     // Generate the PDF
//     RNHTMLtoPDF.convert(options)
//         .then((pdf) => {
//             console.log(`PDF gerado em: ${pdf.filePath}`);
//         })
//         .catch((error) => {
//             console.error('Erro ao gerar o PDF:', error);
//         });

//     //CHAMA FIREBASEPOST

//     const firebaseConfig = {
//         apiKey: "AIzaSyBuTz51FrhMgRnQqQ-XK94vBqB9jgtXVTY",
//         authDomain: "demeter-2a73f.firebaseapp.com",
//         projectId: "demeter-2a73f",
//         storageBucket: "demeter-2a73f.appspot.com",
//         messagingSenderId: "221312520191",
//         appId: "1:221312520191:web:16411649864ae2549361ca",
//         measurementId: "G-W4112HM4G3"
//     };

//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);

//     // Initialize Cloud Storage and get a reference to the service
//     const storage = getStorage(app);

//     variavel = company_cnpj_cpf.replace(/\//g, '')
//     // Create a reference to 'images/mountains.jpg'
//     const pdf = ref(storage, variavel + '/' + file);
//     const gandra = variavel + '/' + file

//     //const filePath = 'C:/Users/Diogo Bites/Desktop/TCC-MAIN/Demeter/870031.pdf';  // Substitua pelo caminho real do seu arquivo
//     console.log(pdf.filePath + '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
//     // const fileContent = fs.readFileSync(resposta.filename);
//     RNFS.readFile(pdf.filePath, 'base64')
//         .then(fileContent => {
//             // Use the file content as needed
//             console.log(fileContent);
//         })
//         .catch(error => {
//             console.log('Error reading file:', error);
//         });

//     // Criar um Uint8Array a partir do conteúdo do arquivo
//     const localFile = new Uint8Array(fileContent);

//     // 'file' comes from the Blob or File API
//     // You need to replace 'path/to/local/file.pdf' with the actual path to your local file

//     uploadBytes(pdf, localFile).then((snapshot) => {
//         console.log('Uploaded a blob or file!');
//         // RETURN FINAL
//         return gandra
//     }).catch((error) => {
//         console.error('Error uploading file:', error);
//     });

//     // try {
//     //     fs.unlinkSync(resposta.filename);
//     //     console.log(`O arquivo ${resposta.filename} foi excluído com sucesso.`);
//     // } catch (err) {
//     //     if (err.code === 'ENOENT') {
//     //         console.log(`O arquivo ${resposta.filename} não foi encontrado.`);
//     //     } else {
//     //         console.error(`Ocorreu um erro ao excluir o arquivo: ${err.message}`);
//     //     }
//     // }
//     try {
//         // Assuming resposta.filename is the path to the file
//         RNFS.unlink(resposta.filename);
//         console.log(`O arquivo ${resposta.filename} foi excluído com sucesso.`);
//     } catch (err) {
//         if (err.code === 'ENOENT') {
//             console.log(`O arquivo ${resposta.filename} não foi encontrado.`);
//         } else {
//             console.error(`Ocorreu um erro ao excluir o arquivo: ${err.message}`);
//         }
//     }

// };

// export { aleluia };

import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import RNFS from 'react-native-fs';
import pdf from 'react-native-html-to-pdf';

function getRandomHash() {
    let randomHash = '';
    const randomNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));
    randomHash = randomNumbers.join('');
    return randomHash;
}

async function aleluia(company_ie, company_ie_st, company_cnpj_cpf, client_receiver_name, client_neighborhood, client_cep, invoice_issue, client_address, client_city_name, client_uf, client_ie, transport_amount_transported_volumes, transport_type_volumes_transported, client_phone_number, total, jsonprodutos) {
    try {
        const outputPath = getRandomHash() + '.pdf';
        const options = { format: 'Letter' };

        serie = getRandomHash()
        vl_total = total
        pesoliquido = (10 * transport_amount_transported_volumes)
        pesobruto = pesoliquido + (0.100 * transport_amount_transported_volumes)

        produtos = JSON.parse(jsonprodutos)
        let htmlString = ""; // Inicialize uma string vazia para armazenar o HTML

        produtos.forEach(prod => {
            // Use a variável htmlString para acumular o HTML
            htmlString += `
    <tr class="titles">
      <th class="cod" style="width: 15.5mm">CÓDIGO</th>
      <th class="descrit" style="width: 66.1mm">${prod.produto}</th>
      <th class="ncmsh">05</th>
      <th class="cst">030</th> 
      <th class="cfop">5.102</th>
      <th class="un">Caixas</th>
      <th class="amount">${prod.quantidade}</th>  
      <th class="valUnit">${prod.valor}</th>              
      <th class="valTotal">${prod.quantidade * prod.valor}</th>   
      <th class="bcIcms">0,00</th>
      <th class="valIcms">0,00</th>
      <th class="valIpi">0,00</th>
      <th class="aliqIcms">0,00</th>
      <th class="aliqIpi">0,00</th>
    </tr>`;
        });

        // Agora a variável htmlString contém o HTML para todos os produtos
        console.log(htmlString);

        const htmlContent = `<!-- Header -->
<style type="text/css">
    @media print {
        @page {
            margin-left: 15mm;
            margin-right: 15mm;
        }
    }

    * {
        margin: 0;
    }

    .ui-widget-content {
        border: none !important;
    }

    .nfe-square {
        margin: 0 auto 2cm;
        box-sizing: border-box;
        width: 2cm;
        height: 1cm;
        border: 1px solid #000;
    }

    .nfeArea.page {
        width: 18cm;
        position: relative;
        font-family: "Times New Roman", serif;
        color: #000;
        margin: 0 auto;
        overflow: hidden;
    }

    .nfeArea .font-12 {
        font-size: 12pt;
    }

    .nfeArea .font-8 {
        font-size: 8pt;
    }

    .nfeArea .bold {
        font-weight: bold;
    }
    /* == TABELA == */
    .nfeArea .area-name {
        font-family: "Times New Roman", serif;
        color: #000;
        font-weight: bold;
        margin: 5px 0 0;
        font-size: 6pt;
        text-transform: uppercase;
    }

    .nfeArea .txt-upper {
        text-transform: uppercase;
    }

    .nfeArea .txt-center {
        text-align: center;
    }

    .nfeArea .txt-right {
        text-align: right;
    }

    .nfeArea .nf-label {
        text-transform: uppercase;
        margin-bottom: 3px;
        display: block;
    }

        .nfeArea .nf-label.label-small {
            letter-spacing: -0.5px;
            font-size: 4pt;
        }

    .nfeArea .info {
        font-weight: bold;
        font-size: 8pt;
        display: block;
        line-height: 1em;
    }

    .nfeArea table {
        font-family: "Times New Roman", serif;
        color: #000;
        font-size: 5pt;
        border-collapse: collapse;
        width: 100%;
        border-color: #000;
        border-radius: 5px;
    }

    .nfeArea .no-top {
        margin-top: -1px;
    }

    .nfeArea .mt-table {
        margin-top: 3px;
    }

    .nfeArea .valign-middle {
        vertical-align: middle;
    }

    .nfeArea td {
        vertical-align: top;
        box-sizing: border-box;
        overflow: hidden;
        border-color: #000;
        padding: 1px;
        height: 5mm;
    }

    .nfeArea .tserie {
        width: 32.2mm;
        vertical-align: middle;
        font-size: 8pt;
        font-weight: bold;
    }

        .nfeArea .tserie span {
            display: block;
        }

        .nfeArea .tserie h3 {
            display: inline-block;
        }

    .nfeArea .entradaSaida .legenda {
        text-align: left;
        margin-left: 2mm;
        display: block;
    }

        .nfeArea .entradaSaida .legenda span {
            display: block;
        }

    .nfeArea .entradaSaida .identificacao {
        float: right;
        margin-right: 2mm;
        border: 1px solid black;
        width: 5mm;
        height: 5mm;
        text-align: center;
        padding-top: 0;
        line-height: 5mm;
    }

    .nfeArea .hr-dashed {
        border: none;
        border-top: 1px dashed #444;
        margin: 5px 0;
    }

    .nfeArea .client_logo {
        height: 27.5mm;
        width: 28mm;
        margin: 0.5mm;
    }

    .nfeArea .title {
        font-size: 10pt;
        margin-bottom: 2mm;
    }

    .nfeArea .txtc {
        text-align: center;
    }

    .nfeArea .pd-0 {
        padding: 0;
    }

    .nfeArea .mb2 {
        margin-bottom: 2mm;
    }

    .nfeArea table table {
        margin: -1pt;
        width: 100.5%;
    }

    .nfeArea .wrapper-table {
        margin-bottom: 2pt;
    }

        .nfeArea .wrapper-table table {
            margin-bottom: 0;
        }

            .nfeArea .wrapper-table table + table {
                margin-top: -1px;
            }

    .nfeArea .boxImposto {
        table-layout: fixed;
    }

        .nfeArea .boxImposto td {
            width: 11.11%;
        }

        .nfeArea .boxImposto .nf-label {
            font-size: 5pt;
        }

        .nfeArea .boxImposto .info {
            text-align: right;
        }

    .nfeArea .wrapper-border {
        border: 1px solid #000;
        border-width: 0 1px 1px;
        height: 75.7mm;
    }

        .nfeArea .wrapper-border table {
            margin: 0 -1px;
            width: 100.4%;
        }

    .nfeArea .content-spacer {
        display: block;
        height: 10px;
    }

    .nfeArea .titles th {
        padding: 3px 0;
    }

    .nfeArea .listProdutoServico td {
        padding: 0;
    }

    .nfeArea .codigo {
        display: block;
        text-align: center;
        margin-top: 5px;
    }

    .nfeArea .boxProdutoServico tr td:first-child {
        border-left: none;
    }

    .nfeArea .boxProdutoServico td {
        font-size: 6pt;
        height: auto;
    }

    .nfeArea .boxFatura span {
        display: block;
    }

    .nfeArea .boxFatura td {
        border: 1px solid #000;
    }

    .nfeArea .freteConta .border {
        width: 5mm;
        height: 5mm;
        text-align: center;
        line-height: 5mm;
        border: 1px solid black;
    }

    .nfeArea .freteConta .info {
        line-height: 5mm;
    }

    .page .boxFields td p {
        font-family: "Times New Roman", serif;
        font-size: 5pt;
        line-height: 1.2em;
        color: #000;
    }

    .nfeArea .imgCanceled {
        position: absolute;
        top: 75mm;
        left: 30mm;
        z-index: 3;
        opacity: 0.8;
        display: none;
    }

    .nfeArea.invoiceCanceled .imgCanceled {
        display: block;
    }

    .nfeArea .imgNull {
        position: absolute;
        top: 75mm;
        left: 20mm;
        z-index: 3;
        opacity: 0.8;
        display: none;
    }

    .nfeArea.invoiceNull .imgNull {
        display: block;
    }

    .nfeArea.invoiceCancelNull .imgCanceled {
        top: 100mm;
        left: 35mm;
        display: block;
    }

    .nfeArea.invoiceCancelNull .imgNull {
        top: 65mm;
        left: 15mm;
        display: block;
    }

    .nfeArea .block {
        display: block;
    }

    .label-mktup {
        font-family: Arial !important;
        font-size: 8px !important;
        padding-top: 8px !important;
    }
</style>
<!-- /Header -->
<script src="../teste.js" ></script>
<!-- Recebimentos -->
<div class="page nfeArea">
    <img class="imgCanceled" src="tarja_nf_cancelada.png" alt="" />
    <img class="imgNull" src="tarja_nf_semvalidade.png" alt="" />
    <div class="boxFields" style="padding-top: 20px;">
        <table cellpadding="0" cellspacing="0" border="1">
            <tbody>
                <tr>
                    <td colspan="2" class="txt-upper">
                        Recebemos de Démeter LTDA os produtos e serviços constantes na nota fiscal indicada ao lado
                    </td>
                    <td rowspan="2" class="tserie txt-center">
                        <span class="font-12" style="margin-bottom: 5px;">NF-e</span>
                        <span>Nº `+ serie + `</span>
                        <span>Série 1</span>
                    </td>
                </tr>
                <tr>
                    <td style="width: 32mm">
                        <span class="nf-label">Data de recebimento</span>
                    </td>
                    <td style="width: 124.6mm">
                        <span class="nf-label">Identificação de assinatura do Recebedor</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr class="hr-dashed" />
        <table cellpadding="0" cellspacing="0" border='1'>
            <tbody>
                <tr>
                    <td rowspan="3" style="width: 30mm">
                        <img class="client_logo" src="https://github.com/Robis123/Demeter/blob/nodeJS/template/icon3.png?raw=true" alt="" onerror=" javascript:this.src='data:image/png;base64,'"/>
                    </td>
                    <td rowspan="3" style="width: 46mm; font-size: 7pt;" class="txt-center">
                        <span class="mb2 bold block">Deméter</span>
                        <span class="block">SEPN 707/907</span>
                        <span class="block">
                        Asa norte - cep:70790-075
                        </span>
                        <span class="block">
                            Brasília - DF- Fone: (61) 3966-1201
                        </span>
                    </td>
                    <td rowspan="3" class="txtc txt-upper" style="width: 34mm; height: 29.5mm;">
                        <h3 class="title">Danfe</h3>
                        <p class="mb2">Documento auxiliar da Nota Fiscal Eletrônica </p>
                        <p class="entradaSaida mb2">
                            <span class="identificacao">
                                <span>1</span>
                            </span>
                            <span class="legenda">
                                <span>0 - Entrada</span>
                                <span>1 - Saída</span>
                            </span>
                        </p>
                        <p>
                            <span class="block bold">
                                <span>Nº</span>
                                <span>`+ serie + `</span>
                            </span>
                            <span class="block bold">
                                <span>SÉRIE:</span>
                                <span>1</span>
                            </span>
                            <span class="block">
                                <span>Página</span>
                                <span>1</span>
                                <span>de</span>
                                <span>1</span>
                            </span>
                        </p>
                    </td>
                    <td class="txt-upper" style="width: 85mm;">
                        <span class="nf-label">Controle do Fisco</span>
                        <span class="codigo">{BarCode}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="nf-label">CHAVE DE ACESSO</span>
                        <span class="bold block txt-center info">[ds_danfe]</span>
                    </td>
                </tr>
                <tr>
                    <td class="txt-center valign-middle">
                        <span class="block">Consulta de autenticidade no portal nacional da NF-e </span> www.nfe.fazenda.gov.br/portal ou no site da Sefaz Autorizada.
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Natureza da Operação -->
        <table cellpadding="0" cellspacing="0" class="boxNaturezaOperacao no-top" border="1">
            <tbody>
                <tr>
                    <td>
                        <span class="nf-label">NATUREZA DA OPERAÇÃO</span>
                        <span class="info">Venda</span>
                    </td>
                    <td style="width: 84.7mm;">
                        <span class="nf-label">protocolo de homologação</span>
                        <span class="info">12345678901234567890</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Inscrição -->
        <table cellpadding="0" cellspacing="0" class="boxInscricao no-top" border="1">
            <tbody>
                <tr>
                    <td>
                        <span class="nf-label">INSCRIÇÃO ESTADUAL</span>
                        <span class="info">`+ company_ie + `</span>
                    </td>
                    <td style="width: 67.5mm;">
                        <span class="nf-label">INSCRIÇÃO ESTADUAL DO SUBST. TRIB.</span>
                        <span class="info">`+ company_ie_st + `</span>
                    </td>
                    <td style="width: 64.3mm">
                        <span class="nf-label">CNPJ</span>
                        <span class="info">12.123.123/1234-12</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Destinatário/Emitente -->
        <p class="area-name">Destinatário/Emitente</p>
        <table cellpadding="0" cellspacing="0" class="boxDestinatario" border="1">
            <tbody>
                <tr>
                    <td class="pd-0">
                        <table cellpadding="0" cellspacing="0" border="1">
                            <tbody>
                                <tr>
                                    <td>
                                        <span class="nf-label">NOME/RAZÃO SOCIAL</span>
                                        <span class="info">`+ client_receiver_name + `</span>
                                    </td>
                                    <td style="width: 40mm">
                                        <span class="nf-label">CNPJ/CPF</span>
                                        <span class="info">`+ company_cnpj_cpf + `</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td style="width: 22mm">
                        <span class="nf-label">DATA DE EMISSÃO</span>
                        <span class="info">`+ invoice_issue + `</span>
                    </td>
                </tr>
                <tr>
                    <td class="pd-0">
                        <table cellpadding="0" cellspacing="0" border="1">
                            <tbody>
                                <tr>
                                    <td>
                                        <span class="nf-label">ENDEREÇO</span>
                                        <span class="info">`+ client_address + `</span>
                                    </td>
                                    <td style="width: 47mm;">
                                        <span class="nf-label">BAIRRO/DISTRITO</span>
                                        <span class="info">`+ client_neighborhood + `</span>
                                    </td>
                                    <td style="width: 37.2 mm">
                                        <span class="nf-label">CEP</span>
                                        <span class="info">`+ client_cep + `</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <span class="nf-label">DATA DE ENTR./SAÍDA</span>
                        <span class="info">`+ invoice_issue + `</span>
                    </td>
                </tr>
                <tr>
                    <td class="pd-0">
                        <table cellpadding="0" cellspacing="0" style="margin-bottom: -1px;" border="1">
                            <tbody>
                                <tr>
                                    <td>
                                        <span class="nf-label">MUNICÍPIO</span>
                                        <span class="info">`+ client_city_name + `</span>
                                    </td>
                                    <td style="width: 34mm">
                                        <span class="nf-label">FONE/FAX</span>
                                        <span class="info">`+ client_phone_number + `</span>
                                    </td>
                                    <td style="width: 28mm">
                                        <span class="nf-label">UF</span>
                                        <span class="info">`+ client_uf + `</span>
                                    </td>
                                    <td style="width: 51mm">
                                        <span class="nf-label">INSCRIÇÃO ESTADUAL</span>
                                        <span class="info">`+ client_ie + `</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <span class="nf-label">HORA ENTR./SAÍDA</span>
                        <span id="info"></span>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Fatura -->
        <div class="boxFatura">
            <p class="area-name"></p>
            FATURA
        </div>

        <!-- Calculo do Imposto -->
        <p class="area-name">Calculo do imposto</p>
        <div class="wrapper-table">
            <table cellpadding="0" cellspacing="0" border="1" class="boxImposto">
                <tbody>
                    <tr>
                        <td>
                            <span class="nf-label label-small">BASE DE CÁLC. DO ICMS</span>
                            <span class="info">`+ vl_total + `</span>
                        </td>
                        <td>
                            <span class="nf-label">VALOR DO ICMS</span>
                            <span class="info">0,00</span>
                        </td>
                        <td>
                            <span class="nf-label label-small" style="font-size: 4pt;">BASE DE CÁLC. DO ICMS ST</span>
                            <span class="info">0,00</span>
                        </td>
                        <td>
                            <span class="nf-label">VALOR DO ICMS ST</span>
                            <span class="info">0,00</span>
                        </td>
                        <td>
                            <span class="nf-label label-small">V. IMP. IMPORTAÇÃO</span>
                            <span class="info"></span>
                        </td>
                        <td>
                            <span class="nf-label label-small">V. ICMS UF REMET.</span>
                            <span class="info"></span>
                        </td>
                        <td>
                            <span class="nf-label">VALOR DO FCP</span>
                            <span class="info">0,00</span>
                        </td>
                        <td>
                            <span class="nf-label">VALOR DO PIS</span>
                            <span class="info"></span>
                        </td>
                        <td>
                            <span class="nf-label label-small">V. TOTAL DE PRODUTOS</span>
                            <span class="info"> `+ vl_total + `</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="nf-label">VALOR DO FRETE</span>
                            <span class="info">0,00</span>
                        </td>
                        <td>
                            <span class="nf-label">VALOR DO SEGURO</span>
                            <span class="info">0,00</span>
                        </td>
                        <td>
                            <span class="nf-label">DESCONTO</span>
                            <span class="info">0,00</span>
                        </td>
                        <td>
                            <span class="nf-label">OUTRAS DESP.</span>
                            <span class="info">0,00</span>
                        </td>
                        <td>
                            <span class="nf-label">VALOR DO IPI</span>
                            <span class="info">0,00</span>
                        </td>
                        <td>
                            <span class="nf-label">V. ICMS UF DEST.</span>
                            <span class="info"></span>
                        </td>
                        <td>
                            <span class="nf-label label-small">V. APROX. DO TRIBUTO</span>
                            <span class="info">0,00</span>
                        </td>
                        <td>
                            <span class="nf-label label-small">VALOR DA CONFINS</span>
                            <span class="info"></span>
                        </td>
                        <td>
                            <span class="nf-label label-small">V. TOTAL DA NOTA</span>
                            <span class="info">`+ vl_total + `</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Transportador/Volumes transportados -->
        <p class="area-name">Transportador/volumes transportados</p>
        <table cellpadding="0" cellspacing="0" border="1">
            <tbody>
                <tr>
                    <td>
                        <span class="nf-label">RAZÃO SOCIAL</span>
                        <span class="info">Deméter Transportadora</span>
                    </td>
                    <td class="freteConta" style="width: 32mm">
                        <span class="nf-label">FRETE POR CONTA</span>
                        <div class="border">
                            <span class="info">1</span>
                        </div>
                        <p>0 - Emitente</p>
                        <p>1 - Destinatário</p>
                    </td>
                    <td style="width: 17.3mm">
                        <span class="nf-label">CÓDIGO ANTT</span>
                        <span class="info">049856894(homol)</span>
                    </td>
                    <td style="width: 24.5mm">
                        <span class="nf-label">PLACA</span>
                        <span class="info">HMJ-0298</span>
                    </td>
                    <td style="width: 11.3mm">
                        <span class="nf-label">UF</span>
                        <span class="info">DF</span>
                    </td>
                    <td style="width: 29.5mm">
                        <span class="nf-label">CNPJ/CPF</span>
                        <span class="info">12.123.123/1234-12</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <table cellpadding="0" cellspacing="0" border="1" class="no-top">
            <tbody>
                <tr>
                    <td class="field endereco">
                        <span class="nf-label">ENDEREÇO</span>
                        <span class="content-spacer info">cep:70790-075
                        </span>
                    </td>
                    <td style="width: 32mm">
                        <span class="nf-label">MUNICÍPIO</span>
                        <span class="info">Brasília</span>
                    </td>
                    <td style="width: 31mm">
                        <span class="nf-label">UF</span>
                        <span class="info">DF</span>
                    </td>
                    <td style="width: 51.4mm">
                        <span class="nf-label">INSC. ESTADUAL</span>
                        <span class="info">123456789</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <table cellpadding="0" cellspacing="0" border="1" class="no-top">
            <tbody>
                <tr>
                    <td class="field quantidade">
                        <span class="nf-label">QUANTIDADE</span>
                        <span class="content-spacer info">`+ transport_amount_transported_volumes + `</span>
                    </td>
                    <td style="width: 31.4mm">
                        <span class="nf-label">ESPÉCIE</span>
                        <span class="info">`+ transport_type_volumes_transported + `</span>
                    </td>
                    <td style="width: 31mm">
                        <span class="nf-label">MARCA</span>
                        <span class="info"></span>
                    </td>
                    <td style="width: 31.5mm">
                        <span class="nf-label">NUMERAÇÃO</span>
                        <span class="info"></span>
                    </td>
                    <td style="width: 31.5mm">
                        <span class="nf-label">PESO BRUTO</span>
                        <span class="info">`+ pesobruto + 'kg' + `</span>
                    </td>
                    <td style="width: 32.5mm">
                        <span class="nf-label">PESO LÍQUIDO</span>
                    <span class="info">`+ pesoliquido + 'kg' + `</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Dados do produto/serviço -->
        <p class="area-name">Dados do produto/serviço</p>
        <div class="wrapper-border">
            <table cellpadding="0" cellspacing="0" border="1" class="boxProdutoServico">
                <thead class="listProdutoServico" id="table">
                    <tr class="titles">
                        <th class="cod" style="width: 15.5mm">CÓDIGO</th>
                        <th class="descrit" style="width: 66.1mm">DESCRIÇÃO DO PRODUTO/SERVIÇO</th>
                        <th class="ncmsh">NCMSH</th>
                        <th class="cst">CST</th>
                        <th class="cfop">CFOP</th>
                        <th class="un">UN</th>
                        <th class="amount">QTD.</th>
                        <th class="valUnit">VLR.UNIT</th>
                        <th class="valTotal">VLR.TOTAL</th>
                        <th class="bcIcms">BC ICMS</th>
                        <th class="valIcms">VLR.ICMS</th>
                        <th class="valIpi">VLR.IPI</th>
                        <th class="aliqIcms">ALIQ.ICMS</th>
                        <th class="aliqIpi">ALIQ.IPI</th>
                    </tr>
                    `+ htmlString + `
                </thead>
                <tbody>  
                    items:
                </tbody>
            </table>
        </div>

        <!-- Calculo de ISSQN -->
        <p class="area-name">Calculo do issqn</p>
        <table cellpadding="0" cellspacing="0" border="1" class="boxIssqn">
            <tbody>
                <tr>
                    <td class="field inscrMunicipal">
                        <span class="nf-label">INSCRIÇÃO MUNICIPAL</span>
                        <span class="info txt-center">123456789</span>
                    </td>
                    <td class="field valorTotal">
                        <span class="nf-label">VALOR TOTAL DOS SERVIÇOS</span>
                        <span class="info txt-right">0,00</span>
                    </td>
                    <td class="field baseCalculo">
                        <span class="nf-label">BASE DE CÁLCULO DO ISSQN</span>
                        <span class="info txt-right">0,00</span>
                    </td>
                    <td class="field valorIssqn">
                        <span class="nf-label">VALOR DO ISSQN</span>
                        <span class="info txt-right">0,00</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Dados adicionais -->
        <p class="area-name">Dados adicionais</p>
        <table cellpadding="0" cellspacing="0" border="1" class="boxDadosAdicionais">
            <tbody>
                <tr>
                    <td class="field infoComplementar">
                        <span class="nf-label">INFORMAÇÕES COMPLEMENTARES</span>
                        <span>Essa é uma nota fiscal eletronica SEM VALIDADE JURIDICA, feita apenas para demonstração do sistema em ambiente estudantil,
                        apesar de seguir normas e regras gerais para a emissão de nota a mesma não possui validação do ISS.NET
                        </span>
                    </td>
                    <td class="field reservaFisco" style="width: 85mm; height: 24mm">
                        <span class="nf-label">RESERVA AO FISCO</span>
                        <span></span>
                    </td>
                </tr>
            </tbody>
        </table>
                            
        <footer>
            <table cellpadding="0" cellspacing="0">
                <tbody>
                    <tr>
                        <td style="text-align: right"><strong>Empresa de Software www.demetertccbr.online</strong></td>
                    </tr>
                </tbody>
            </table>
        </footer>
    </div>
</div>
`;

        const pdfResult = await pdf.create(htmlString, options).toFile(outputPath);
        console.log(`PDF gerado em: ${pdfResult.filePath}`);

        const firebaseConfig = {
            apiKey: "AIzaSyBuTz51FrhMgRnQqQ-XK94vBqB9jgtXVTY",
            authDomain: "demeter-2a73f.firebaseapp.com",
            projectId: "demeter-2a73f",
            storageBucket: "demeter-2a73f.appspot.com",
            messagingSenderId: "221312520191",
            appId: "1:221312520191:web:16411649864ae2549361ca",
            measurementId: "G-W4112HM4G3"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        // Initialize Cloud Storage and get a reference to the service
        const storage = getStorage(app);

        const variavel = req.body.nl_company_cnpj_cpf.replace(/\//g, '');
        const file = outputPath;

        // Create a reference to the file in Cloud Storage
        const pdfRef = ref(storage, variavel + '/' + file);

        // Read the file content using react-native-fs
        const fileContent = await RNFS.readFile(pdfResult.filePath, 'base64');

        // Create a Uint8Array from the base64-encoded file content
        const localFile = new Uint8Array(Buffer.from(fileContent, 'base64'));

        // Upload the file to Cloud Storage
        await uploadBytes(pdfRef, localFile);

        // Log success and return the file path
        console.log('Uploaded a blob or file!');
        return pdfRef.fullPath;
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}

export { aleluia };