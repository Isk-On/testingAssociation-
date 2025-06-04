const nav = document.querySelector(".header-menu");
const langSwitcher = document.getElementById("langSwitcher");

window.addEventListener("scroll", function () {
  window.scrollY > 100 || this.window.innerWidth < 625
    ? (nav.style.backgroundColor = "#212529")
    : (nav.style.backgroundColor = "transparent");
});

const burger = document.body.querySelector(".burger-menu");

burger.addEventListener("click", function (e) {
  this.classList.toggle("active");
});

const translations = {
  ru: {
    home: "Главная",
    aboutNav: "О продукции",
    Membership: "Членство",
    contact: "Контакты",
    assoh2: "Республика Узбекистан",
    assoh1: "Ассоциация традиционной медицины",
    assoServ: "Услуги, предостовляемые ассоциацией",
    services: "УСЛУГИ",
    servicesAsso: "Услуги, предоставляемые Ассоциацией",
    servicesTextFirstTitle: "Налоговые льготы",
    servicesTextFirstP: `Члены Ассоциации имеют льготы по уплате единого налогового
    платежа с доходов, полученных от реализации произведённых ими
    изделий народных художественных промыслов и прикладного
    искусства в порядке, установленном законодательством.`,
    servicesTextSecondTitle: "Выставки",
    servicesTextSecondP: `Члены Ассоциации получат возможность участвовать со своими
    изделиями ремесленничества на выставках, фестивалях и
    духовно-просветительских мероприятиях, проводимых как в
    Узбекистане, так и в зарубежных странах.`,
    servicesTextThirdTitle: "Социальная Защита",
    servicesTextThirdP: `Ассоциация «Хунарманд» Узбекистана осуществляет работу по
    социальной защите членов ассоциации на основании договора с
    межбанковской страховой компанией «Ишонч».`,
    statsTitle: "СТАТИСТИКА",
    statsP: "Статистика деятельности ассоциации",
    firstStats: "Количество зарегистрированных членов ассоциации в системе",
    SecondStats: "Общее количество членов ассоциации в системе",
    ThirdStats: "Общее количество ремесленников, работающих в сфере туризма",
    ourPartners: "Наши партнёры:",
    ourVideo: "Наши видео:",
    contactWIthUs: "Связаться с нами",
    contactWithUsP: `Есть вопросы или замечания? Просто напишите <br />
    нам сообщение!`,
    contactWIthUsPlaceholderFirst: "Ваше имя",
    contactWIthUsPlaceholderSecond: "Номер телефона",
    contactWIthUsPlaceholderSubmit: "Отправить",
    contactWIthUsPhoneTitle: `Телефон`,
    contactWIthUsPhoneP: "+998 (50) 002-44-91",
    contactWIthUsLocationTitle: "Расположение",
    contactWIthUsLocationP: `100000, ул.А.Навоий 2к2, <br> Шайхонтахурский район, <br> Ташкент, <br>
              Узбекистан`,
  },
  en: {
    home: "Home",
    aboutNav: "About the Product",
    Membership: "Membership",
    contact: "Contact",
    assoh2: "Republic of Uzbekistan",
    assoh1: "Association of Traditional Medicine",
    assoServ: "Services Provided by the Association",
    services: "SERVICES",
    servicesAsso: "Services Provided by the Association",
    servicesTextFirstTitle: "Tax Benefits",
    servicesTextFirstP: `Association members are entitled to benefits on the payment of a unified tax
  on income earned from the sale of their folk art and applied
  art products, in accordance with the law.`,
    servicesTextSecondTitle: "Exhibitions",
    servicesTextSecondP: `Association members will have the opportunity to participate
  with their handicraft products in exhibitions, festivals, and
  spiritual and educational events held both in
  Uzbekistan and abroad.`,
    servicesTextThirdTitle: "Social Protection",
    servicesTextThirdP: `The Hunarmand Association of Uzbekistan carries out social
  protection activities for its members based on an agreement with
  the interbank insurance company "Ishonch".`,
    statsTitle: "STATISTICS",
    statsP: "Association activity statistics",
    firstStats: "Number of registered members in the system",
    SecondStats: "Total number of association members in the system",
    ThirdStats: "Total number of artisans working in tourism",
    ourPartners: "Our partners:",
    ourVideo: "Our videos:",
    contactWIthUs: "Contact Us",
    contactWithUsP: `Have questions or feedback? Just send us a <br /> message!`,
    contactWIthUsPlaceholderFirst: "Your name",
    contactWIthUsPlaceholderSecond: "Phone number",
    contactWIthUsPlaceholderSubmit: "Send",
    contactWIthUsPhoneTitle: `Phone`,
    contactWIthUsPhoneP: "+998 (50) 002-44-91",
    contactWIthUsLocationTitle: "Location",
    contactWIthUsLocationP: `100000,  
2k2 A. Navoi Street,  <br>
Shaykhantakhur District,  <br>
Tashkent, <br> Uzbekistan`,
  },
  uz: {
    home: "Bosh sahifa",
    aboutNav: "Mahsulot haqida",
    Membership: "A'zolik",
    contact: "Aloqa",
    assoh2: "O'zbekiston Respublikasi",
    assoh1: "An'anaviy Tibbiyot Assotsiatsiyasi",
    assoServ: "Assotsiatsiya tomonidan ko‘rsatiladigan xizmatlar",
    services: "XIZMATLAR",
    servicesAsso: "Assotsiatsiya tomonidan taqdim etiladigan xizmatlar",
    servicesTextFirstTitle: "Soliq imtiyozlari",
    servicesTextFirstP: `Assotsiatsiya a'zolari o'zlari ishlab chiqargan xalq
  hunarmandchiligi va amaliy san'at mahsulotlarini sotishdan olingan
  daromadlaridan yagona soliq to'lovini to'lashda qonunchilikda belgilangan
  tartibda imtiyozlarga ega bo'lishadi.`,
    servicesTextSecondTitle: "Ko‘rgazmalar",
    servicesTextSecondP: `Assotsiatsiya a'zolari o‘z hunarmandchilik mahsulotlari bilan
  O‘zbekistonda va xorijiy mamlakatlarda o‘tkaziladigan ko‘rgazmalar,
  festivallar va ma'naviy-ma'rifiy tadbirlarda ishtirok etish imkoniyatiga ega bo‘ladilar.`,
    servicesTextThirdTitle: "Ijtimoiy Himoya",
    servicesTextThirdP: `O‘zbekiston “Hunarmand” Assotsiatsiyasi a’zolarining ijtimoiy himoyasini
  “Ishonch” banklararo sug‘urta kompaniyasi bilan tuzilgan shartnoma asosida amalga oshiradi.`,
    statsTitle: "STATISTIKA",
    statsP: "Assotsiatsiya faoliyati statistikasi",
    firstStats: "Tizimda ro'yxatdan o'tgan a'zolar soni",
    SecondStats: "Tizimdagi umumiy a'zolar soni",
    ThirdStats: "Turizm sohasida faoliyat yuritayotgan hunarmandlar soni",
    ourPartners: "Hamkorlarimiz:",
    ourVideo: "Videolarimiz:",
    contactWIthUs: "Biz bilan bog'laning",
    contactWithUsP: `Savol yoki fikrlaringiz bormi? Shunchaki bizga <br /> xabar yuboring!`,
    contactWIthUsPlaceholderFirst: "Ismingiz",
    contactWIthUsPlaceholderSecond: "Telefon raqami",
    contactWIthUsPlaceholderSubmit: "Yuborish",
    contactWIthUsPhoneTitle: `Telefon`,
    contactWIthUsPhoneP: "+998 (50) 002-44-91",
    contactWIthUsLocationTitle: "Manzil",
    contactWIthUsLocationP: `100000, ул.А.Навоий 2к2, <br> Шайхонтахурский район, <br> Ташкент, <br>
              Узбекистан`,
  },
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = translations[lang][key];
  });
}

setLanguage("ru");

langSwitcher.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

const chat_id = "786490978";
const botID = "bot6791570227:AAEfUo9Lm0DJwo-cAVjN6kTLHoix96gGnGE";
const telegramURL = `https://api.telegram.org/${botID}/sendMessage`;

document.querySelector("#messageForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  let formData = new FormData(e.target);
  let text = "";
  for (let [key, value] of formData.entries()) {
    text += `${key}: ${value}\n`;
  }

  const sendMessage = await fetch(telegramURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id, text }),
  });
  e.target.reset();

  sendMessage.ok
    ? alert("Message Sent!")
    : alert("Message Failed to send :( " + (await sendMessage.text()));
});
