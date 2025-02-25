//LOGOS
import logo1 from "../Resourses/Logos/2025_60NGreenland.png";
import logo2 from "../Resourses/Logos/2025_Air_Greenland.png";
import logo3 from "../Resourses/Logos/2025_Arctic_Law.png";
import logo4 from "../Resourses/Logos/2025_Arctic_Import.png";
import logo5 from "../Resourses/Logos/2025_Gorrissen_Federspie.png";
import logo6 from "../Resourses/Logos/2025_bws_shipping.png";
import logo7 from "../Resourses/Logos/2025_Danish_Industry.png";
import logo8 from "../Resourses/Logos/2025_apm.png";
import logo9 from "../Resourses/Logos/2025_Greenland_Travel.png";
import logo10 from "../Resourses/Logos/2025_Illit.png";
import logo11 from "../Resourses/Logos/2025_BMS.png";
import logo12 from "../Resourses/Logos/2025_ksms.png";
import logo13 from "../Resourses/Logos/2025_Greenland_Resources.png";
import logo14 from "../Resourses/Logos/2025_arcticulture.png";
import logo16 from "../Resourses/Logos/2025_BDO.png";
import logo17 from "../Resourses/Logos/2025_Lumina.png";
import logo18 from "../Resourses/Logos/2025_EMJ.png";
import logo19 from "../Resourses/Logos/2025_Pangaea.png";
import logo20 from "../Resourses/Logos/2025_North_Water.png";
import logo21 from "../Resourses/Logos/2025_Nunagreen.png";
import logo24 from "../Resourses/Logos/2025_Gronlands_Banken.png";
import logo26 from "../Resourses/Logos/2025_Nuna_Law.png";
import logo28 from "../Resourses/Logos/2025_Rambøll_Grønland_A_S.png";
import logo29 from "../Resourses/Logos/2025_UP_Front_Communication_GR.png";
import logo30 from "../Resourses/Logos/2025_Sikuki_Nuuk_Harbour.png";
import logo31 from "../Resourses/Logos/2025_Cowi.png";
import logo33 from "../Resourses/Logos/2025_ral-logo-red.png";
import logo34 from "../Resourses/Logos/2025_Kommuneqarfik_Sermersooq.png";
import logo35 from "../Resourses/Logos/2025_KalaallitForsikring.png";
import logo36 from "../Resourses/Logos/2025_Greenland_Business_Association_(GE).png";
import logo37 from "../Resourses/Logos/2025_Nalik_Venture.png";
import logo38 from "../Resourses/Logos/2025_Tusass.png";
import logo39 from "../Resourses/Logos/2025_VR_Travel.png";
import logo40 from "../Resourses/Logos/2025_Kirklarsen.png";
import logo41 from "../Resourses/Logos/2025_Sermeq_Helicopters_A_S.png";
import logo42 from "../Resourses/Logos/2025_greenlandcopter.png";

//PDFS
import pdf1 from "../Resourses/PDFs/2025_60N.pdf";
import pdf2 from "../Resourses/PDFs/2025_Air_Greenland.pdf";
import pdf3 from "../Resourses/PDFs/2025_arcticlaw.pdf";
import pdf4 from "../Resourses/PDFs/2025_Arctic_Import.pdf";
import pdf5 from "../Resourses/PDFs/2025_Gorrissen_Federspiel.pdf";
import pdf6 from "../Resourses/PDFs/2025_Mining_BWS.pdf";
import pdf9 from "../Resourses/PDFs/2025_Greenland_Travel.pdf";
import pdf8 from "../Resourses/PDFs/2025_apm.pdf";
import pdf10 from "../Resourses/PDFs/2025_Illit_Forsikringit.pdf";
import pdf11 from "../Resourses/PDFs/2025_BMS_Magasin.pdf";
import pdf12 from "../Resourses/PDFs/2025_ksms.pdf";
import pdf13 from "../Resourses/PDFs/2025_Greenland_Resources.pdf";                                                  
import pdf16 from "../Resourses/PDFs/2025_BDO.pdf";
import pdf17 from "../Resourses/PDFs/2025_Lumina.pdf";
import pdf18 from "../Resourses/PDFs/2025_EMJ.pdf";
import pdf20 from "../Resourses/PDFs/2025_North_Water_Greenland.pdf"; 
import pdf21 from "../Resourses/PDFs/2025_Nuna.pdf";
import pdf24 from "../Resourses/PDFs/2025_bank.pdf";
import pdf26 from "../Resourses/PDFs/2025_nuna_law.pdf";
import pdf30 from "../Resourses/PDFs/2025_Sikuki.pdf";
import pdf31 from "../Resourses/PDFs/2025_COWI_PDAC.pdf";
import pdf34 from "../Resourses/PDFs/2025_Kommuneqarfik_Sermersooq.pdf";
import pdf35 from "../Resourses/PDFs/2025_Kalaallit_Forsikring.pdf";
import pdf36 from "../Resourses/PDFs/2025_Greenland_Business_Association_(GE).pdf";
import pdf37 from "../Resourses/PDFs/2025_Nalik_Venture.pdf";
import pdf38 from "../Resourses/PDFs/2025_tusass.pdf";
import pdf39 from "../Resourses/PDFs/2025_VR_Travel.pdf";
import pdf40 from "../Resourses/PDFs/2025_kirklarsen.pdf";
import pdf41 from "../Resourses/PDFs/2025_Sermeq_Helicopters.pdf";
import { getYear } from "../utils";

 

export const companies = [
  {
    name: "60NorthGreenland",
    logo: logo1,
    website: "https://www.60north.gl/en/",
    pdf: pdf1,
    type: "withmail",
    email: `lasse@60north.gl?subject=PDAC ${getYear()}`,
    id: 1
  },
  {
    name: "Air Greenland A/S",
    logo: logo2,
    website: "https://www.airgreenland.com/",
    pdf: pdf2,
    type: "withmail",
    email: `rve@airgreenland.gl?subject=PDAC ${getYear()}`,
    id: 2
  },
  {
    name: "Arctic Law Greenland",
    logo: logo3,
    website: "https://arcticlawgreenland.gl/en/",
    pdf: pdf3,
    type: "withmail",
    email: `bk@alg.gl?subject=PDAC ${getYear()}`,
    id: 3
  },
  {
    name: "Arctic Import",
    logo: logo4,
    website: "https://www.arcticimport.dk/",
    pdf: pdf4,
    type: "withmail",
    email: `thj@arcticimport.dk?subject=PDAC ${getYear()}`,
    id: 4
  },
  {
    name: "Gorrissen Federspiel",
    logo: logo5,
    website: "https://gorrissenfederspiel.com/en/",
    pdf: pdf5,
    type: "withmail",
    email: `mm@gorrissenfederspiel.com?subject=PDAC ${getYear()}`,
    id: 5
  },
  {
    name: "Blue Water Shipping",
    logo: logo6,
    website: "https://www.bws.net/",
    pdf: pdf6,
    type: "withmail",
    email: `thal@bws.dk?subject=PDAC ${getYear()}`,
    id: 6
  },
  {
    name: "Confederation of Danish Industry",
    logo: logo7,
    website: "https://www.danskindustri.dk/english/",
    pdf: null,
    type: "withmail",
    email: `hbu@di.dk;jhn@di.dk?subject=PDAC ${getYear()}`,
    id: 7
  },
  {
    name: "APM Terminals",
    logo: logo8,
    website: "https://www.apmterminals.com/",
    pdf: pdf8,
    type: "withmail",
    email: `helle.almind@apmterminals.com?subject=PDAC ${getYear()}`,
    id: 8
  },
  {
    name: "Greenland Travel",
    logo: logo9,
    website: "https://www.greenland-travel.com",
    pdf: pdf9,
    type: "withmail",
    email: `MLN@greenland-travel.gl;TM@greenland-travel.dk?subject=PDAC ${getYear()}`,
    id: 9
  },
  {
    name: "Illit Forsikringit Agentur A/S",
    logo: logo10,
    website: "http://illitforsikringit.gl/da/",
    pdf: pdf10,
    type: "withmail",
    email: `8nw@codan.dk?subject=PDAC ${getYear()}`,
    id: 10
  },
  {
    name: "BMS A/S",
    logo: logo11,
    website: "https://bms.dk/en",
    pdf: pdf11,
    type: "withmail",
    email: `khl@bms.dk?subject=PDAC ${getYear()}`,
    id: 11
  },
  {
    name: "KSMS",
    logo: logo12,
    website: "https://gregersen.my.canva.site/ksms",
    pdf: pdf12,
    type: "withmail",
    email: `kristian.storhamar@icloud.com?subject=PDAC ${getYear()}`,
    id: 12
  },
  {
    name: "Greenland Resources A/S",
    logo: logo13,
    website: "https://www.greenlandresources.ca/",
    pdf: pdf13,
    type: "withmail",
    email: `nb@greenlandresourcesinc.com?subject=PDAC ${getYear()}`,
    id: 13
  },
  {
    name: "Arcticulture ApS",
    logo: logo14,
    website: "https://arcticulture.com/",
    pdf: null,
    type: "withmail",
    email: `jbf@arcticulture.com?subject=PDAC ${getYear()}`,
    id: 14
  },
  {
    name: "BDO Statsautoriseret Revisionsaktieselskab",
    logo: logo16,
    website: "https://www.bdo.global/en-gb/home",
    pdf: pdf16,
    type: "withmail",
    email: `clbec@bdo.dk?subject=PDAC ${getYear()}`,
    id: 16
  },
  {
    name: "Lumina Sustainable Materials A/S",
    logo: logo17,
    website: "http://luminamaterials.com/",
    pdf: pdf17,
    type: "withmail",
    email: `bent@lumina.gl?subject=PDAC ${getYear()}`,
    id: 17
  },
  {
    name: "EMJ-Atcon Greenland A/S",
    logo: logo18,
    website: "https://www.emj-atcon.gl/",
    pdf: pdf18,
    type: "withmail",
    email: `dan@emj.gl?subject=PDAC ${getYear()}`,
    id: 18
  },
  {
    name: "Pangaea Logistics Solutions A/S",
    logo: logo19,
    website: "https://www.pangeals.com/",
    pdf: "https://noble.mediasite.com/Mediasite/Play/2283ad7a4bc44c348cb0ff556eaf08d71d",
    type: "withmail",
    email: `CAndersen@Pangaeals.com?subject=PDAC ${getYear()}`,
    id: 19
  },
  {
    name: "North Water Greenland ApS",
    logo: logo20,
    website: "https://northwater.gl/",
    pdf: pdf20,
    type: "withmail",
    email: `jed@worldwater.gl?subject=PDAC ${getYear()}`,
    id: 20
  },
  {
    name: "NunaGreen A/S",
    logo: logo21,
    website: "https://nunagreen.com/",
    pdf: pdf21,
    type: "withmail",
    email: `eva@nunagreen.gl?subject=PDAC ${getYear()}`,
    id: 21
  },
  {
    name: "Grønlandsbanken A/S",
    logo: logo24,
    website: "https://banken.gl/da/om-os",
    pdf: pdf24,
    type: "withmail",
    email: `ss@banken.gl?subject=PDAC ${getYear()}`,
    id: 24
  },
  {
    name: "Nuna Law Firm ApS",
    logo: logo26,
    website: "http://www.nuna-law.com/?lang=en",
    pdf: pdf26,
    type: "withmail",
    email: `hk@nuna-law.gl?subject=PDAC ${getYear()}`,
    id: 26
  },
  {
    name: "Rambøll Grønland A/S",
    logo: logo28,
    website: "https://ramboll.com/contact/greenland",
    pdf: null,
    type: "withmail",
    email: `inb@ramboll.gl?subject=PDAC ${getYear()}`,
    id: 28
  },
  {
    name: "UP Front Communication ApS",
    logo: logo29,
    website: "https://upfrontcom.dk/kontakt",
    pdf: null,
    type: "withmail",
    email: `hans.bak@mail.dk?subject=PDAC ${getYear()}`,
    id: 29
  },
  {
    name: "Sikuki Nuuk Harbour A/S",
    logo: logo30,
    website: "http://www.sikuki.com/",
    pdf: pdf30,
    type: "withmail",
    email: `jr@sikuki.gl?subject=PDAC ${getYear()}`,
    id: 30
  },
  {
    name: "COWI",
    logo: logo31,
    website: "https://www.cowi.com/",
    pdf: pdf31,
    type: "withmail",
    email: `krge@cowi.com?subject=PDAC ${getYear()}`,
    id: 31
  },
  {
    name: "Royal Arctic Line A/S",
    logo: logo33,
    website: "https://www.royalarcticline.com/",
    pdf: null,
    type: "withmail",
    email: `nic@ral.gl?subject=PDAC ${getYear()}`,
    id: 33
  },
  {
    name: "Kommuneqarfik Sermersooq",
    logo: logo34,
    website: "https://sermersooq.gl/da/",
    pdf: pdf34,
    type: "withmail",
    email: `mdsk@sermersooq.gl?subject=PDAC ${getYear()}`,
    id: 34
  },
  {
    name: "Kalaallit Forsikring A/S",
    logo: logo35,
    website: "https://www.forsikring.gl/web/gl/kalaallitdk.nsf",
    pdf: pdf35,
    type: "withmail",
    email: `dora.drechsel@if.gl?subject=PDAC ${getYear()}`,
    id: 35
  },
  {
    name: "Greenland Business Association",
    logo: logo36,
    website: "http://ge.ga.gl/da-dk/Velkommen/English",
    pdf: pdf36,
    type: "withmail",
    email: `ga@ga.gl?subject=PDAC ${getYear()}`,
    id: 36
  },
  {
    name: "Nalik Ventures",
    logo: logo37,
    website: "http://www.nalik.gl/",
    pdf: pdf37,
    type: "withmail",
    email: `tyt@nalik.gl?subject=PDAC ${getYear()}`,
    id: 37
  },
  {
    name: "Tusass",
    logo: logo38,
    website: "https://www.tusass.gl/en/",
    pdf: pdf38,
    type: "withmail",
    email: `nich@tusass.gl?subject=PDAC ${getYear()}`,
    id: 38
  },
  {
    name: "VR Travel Greenland",
    logo: logo39,
    website: "https://www.vr-travel.com",
    pdf: pdf39,
    type: "withmail",
    email: `np@vejle-rejser.gl?subject=PDAC ${getYear()}`,
    id: 39
  },
  {
    name: "Kirk Larsen & Ascanius Greenland",
    logo: logo40,
    website: "http://www.kirklarsen.gl",
    pdf: pdf40,
    type: "withmail",
    email: `kas@kirklarsen.gl?subject=PDAC ${getYear()}`,
    id: 40
  },
  {
    name: "Sermeq Helicopters A/S",
    logo: logo41,
    website: "https://www.sermeqhelicopters.gl/",
    pdf: pdf41,
    type: "withmail",
    email: `pilu@helicopter.gl?subject=PDAC ${getYear()}`,
    id: 41
  },
  {
    name: "GreenlandCopter",
    logo: logo42,
    website: "https://www.greenlandcopter.com/",
    pdf: null,
    type: "withmail",
    email: `tim@greenlandcopter.com?subject=PDAC ${getYear()}`,
    id: 42
  },

];
