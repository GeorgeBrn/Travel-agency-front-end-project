//CALENDAR
//MONTH CLASS
class Month {
  constructor(title, date, location, price, duration, image, link) {
    this.title = title;
    this.date = date;
    this.location = location;
    this.price = price;
    this.duration = duration;
    this.image = image;
    this.link = link;
  }
}

//JANUARY
const janEvent_1 = new Month(
  "Alpinism",
  "5 ianuarie 2022",
  "Munții Bucegi",
  "1500 lei",
  "3 zile",
  "alpinism"
);

const janEvent_2 = new Month(
  "Drumeție",
  "15 ianuarie 2022",
  "Munții Făgăraș",
  "250 lei",
  "1 zi",
  "drumetie"
);

const jan = [janEvent_1, janEvent_2];

//FEBRUARY
const febEvent_1 = new Month(
  "Cățărare",
  "5 februarie 2022",
  "Munții Retezat",
  "1000 lei",
  "3 zile",
  "catarare"
);

const febEvent_2 = new Month(
  "Excursie",
  "15 februarie 2022",
  "Munții Bucegi",
  "600 lei",
  "3 zile",
  "excursie"
);

const febEvent_3 = new Month(
  "Excursie",
  "23 februarie 2022",
  "Munții Bucegi",
  "600 lei",
  "3 zile",
  "excursie"
);

const feb = [febEvent_1, febEvent_2, febEvent_3];

//MARCH
const marEvent_1 = new Month(
  "Excursie",
  "20 martie 2022",
  "Munții Bucegi",
  "600 lei",
  "3 zile",
  "excursie"
);

const marEvent_2 = new Month(
  "Drumeție",
  "26 martie 2022",
  "Munții Făgăraș",
  "250 lei",
  "1 zi",
  "drumetie"
);

const mar = [marEvent_1, marEvent_2];

//JUNE
const junEvent_1 = new Month(
  "Cățărare",
  "5 iunie 2022",
  "Munții Retezat",
  "750 lei",
  "2 zile",
  "catarare"
);

const junEvent_2 = new Month(
  "Drumeție",
  "17 iunie 2022",
  "Munții Făgăraș",
  "250 lei",
  "1 zi",
  "drumetie"
);

const junEvent_3 = new Month(
  "Cățărare",
  "25 iunie 2022",
  "Munții Retezat",
  "1000 lei",
  "3 zile",
  "catarare"
);

const jun = [junEvent_1, junEvent_2, junEvent_3];

//JULY
const julEvent_1 = new Month(
  "Drumeție",
  "7 iulie 2022",
  "Poiana Brașov",
  "250 lei",
  "1 zi",
  "drumetie"
);

const julEvent_2 = new Month(
  "Cățărare",
  "12 iulie 2022",
  "Munții Bucegi",
  "1000 lei",
  "3 zile",
  "catarare"
);

const julEvent_3 = new Month(
  "Excursie",
  "17 iulie 2022",
  "Munții Bucegi",
  "600 lei",
  "3 zile",
  "excursie"
);

const julEvent_4 = new Month(
  "Drumeție",
  "26 iulie 2022",
  "Munții Făgăraș",
  "250 lei",
  "1 zi",
  "drumetie"
);

const jul = [julEvent_1, julEvent_2, julEvent_3, julEvent_4];

//OCTOBER
const octEvent_1 = new Month(
  "Cățărare",
  "7 octombrie 2022",
  "Munții Retezat",
  "750 lei",
  "2 zile",
  "catarare"
);

const octEvent_2 = new Month(
  "Cățărare",
  "26 octombrie 2022",
  "Munții Retezat",
  "750 lei",
  "2 zile",
  "catarare"
);

const oct = [octEvent_1, octEvent_2];

//DECEMBER
const decEvent_1 = new Month(
  "Alpinism",
  "5 decembrie 2022",
  "Munții Bucegi",
  "1500 lei",
  "3 zile",
  "alpinism"
);

const decEvent_2 = new Month(
  "Alpinism",
  "20 decembrie 2022",
  "Munții Bucegi",
  "1500 lei",
  "3 zile",
  "alpinism"
);

const decEvent_3 = new Month(
  "Alpinism",
  "25 decembrie 2022",
  "Munții Bucegi",
  "1500 lei",
  "3 zile",
  "alpinism"
);

const dec = [decEvent_1, decEvent_2, decEvent_3];

const allMonths = [jan, feb, mar, 0, 0, jun, jul, 0, 0, oct, 0, dec];

export { allMonths };
