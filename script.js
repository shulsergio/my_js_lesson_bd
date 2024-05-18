Butt1Box1.onclick = function () {
  var count1 = document.getElementById("count1-box1").value;
  var count2 = document.getElementById("count2-box1").value;
  let value = count1 * count2;
  document.getElementById("result-box1").innerHTML = value;

  // конкатенация
  // let t = 1 + 1 + "2";
  // console.log(t);
};

ButtColourBox2.onclick = function () {
  const ColourArray = [
    "Yellow",
    "OrangeRed",
    "Aqua",
    "ForestGreen",
    "RoyalBlue",
    "Red",
    "Black",
  ];
  let RandItem = Math.floor(Math.random() * ColourArray.length);
  const FinalElem = document.getElementById("para");
  FinalElem.style.color = ColourArray[RandItem];
};

ButtHideBox2.onclick = function () {
  const elem = document.getElementById("para");
  let elem2 = document.getElementById("ButtHideBox2").value;
  console.log(elem2);
  //   elem.style.display = "none";
  if (elem2 == "Hidden") {
    elem.style.visibility = "hidden";
    document.getElementById("ButtHideBox2").value = "Unhide";
  } else {
    elem.style.visibility = "Visible";
    document.getElementById("ButtHideBox2").value = "Hidden";
  }
};

ButtValBox3.onclick = function () {
  let NewElement = document.getElementById("currency-type1").textContent;
  NewElement = document.getElementById("currency-type1").textContent;
  console.log(NewElement);
  document.getElementById("currency-type1").textContent =
    document.getElementById("currency-type2").textContent;
  document.getElementById("currency-type2").textContent = NewElement;
  document.getElementById("input1-box3").value = 0;
  document.getElementById("input2-box3").value = 0;
};

ButtChangeBox3.onclick = function () {
  const CurrencyValue = [];
  CurrencyValue[0] = document.getElementById("input1-box3").value;
  CurrencyValue[1] = document.getElementById("input2-box3").value;
  const CurrencyType = [];
  CurrencyType[0] = document.getElementById("currency-type1").textContent;
  CurrencyType[1] = document.getElementById("currency-type2").textContent;
  //   console.log(`CurrencyValue - ${CurrencyValue}`);
  //   console.log(`CurrencyType - ${CurrencyType}`);
  if (CurrencyValue[0] == 0) {
    CurrencyValue[0] =
      CurrencyType[0] == "UAH" ? CurrencyValue[1] * 40 : CurrencyValue[1] / 40;
    document.getElementById("input1-box3").value = CurrencyValue[0];
    console.log(`В цикле если первоій 0 - ${CurrencyValue}`);
  } else {
    CurrencyValue[1] =
      CurrencyType[0] == "UAH" ? CurrencyValue[0] / 40 : CurrencyValue[0] * 40;
    document.getElementById("input2-box3").value = CurrencyValue[1];
    console.log(`Во втором цикле, первій не ноль - ${CurrencyValue}`);
  }
};

function ButtValBox4() {
  const QtyStupenka = document.getElementById("text-box4").value;
  // console.log(
  //   `ступенек= ${QtyStupenka},
  //   делить на 2= ${QtyStupenka / 2},
  //   округление= ${Math.trunc(QtyStupenka / 2)},
  //   остаток от деления= ${QtyStupenka % 2}`
  // );
  const MinQty = Math.trunc(QtyStupenka / 2) + (QtyStupenka % 2);
  const MaxQty = QtyStupenka;
  document.querySelector(
    ".result-box4"
  ).textContent = `Нужно сделать от ${MinQty} до ${MaxQty} шагов`;
}
