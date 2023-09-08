import React from "react";
import AuthorImage from "../../assets/images/author.png";
import bayroqcha from "../../assets/icons/bayroq.svg";
import CardBook from "../../components/UI/Card/Book/CardBook"

const index = () => {
  return (
    <div className="flex gap-x-[78px]">
      <div>
        <img
          className="w-[700px] h-[700px] mb-[70px] "
          src={AuthorImage}
          alt="Image"
        />
        <div className=" mt-[40px] flex items-center px-[40px] gap-x-[31px]">
          <div>
            <p className=" font-sans font-medium tetx-[rgba(255, 255, 255, 0.60)] text-[16px] font-light leading-[144.4%]">
              Tavallud sanasi
            </p>
            <p className="text-[#C9AC8C] font-['Rotter'] text-[32px] font-normal leading-[144.4%]">
              5-Avg 1941
            </p>
            <address className=" font-sans font-medium tetx-[rgba(255, 255, 255, 0.60)] text-[16px] font-light leading-[144.4%]">
              Toshkent, Uzbekistan
            </address>
          </div>
          <p className="text-[32px] text-[#C9AC8C]">-</p>
          <div>
            <p className=" font-sans font-medium tetx-[rgba(255, 255, 255, 0.60)] text-[16px] font-light leading-[144.4%]">
              Vafaot etgan sanasi
            </p>
            <p className="text-[#C9AC8C] font-['Rotter'] text-[32px] font-normal leading-[144.4%]">
              24-MAY 2013
            </p>
            <address className=" font-sans font-medium tetx-[rgba(255, 255, 255, 0.60)] text-[16px] font-light leading-[144.4%]">
              Toshkent, Uzbekistan
            </address>
          </div>
        </div>
      </div>
      <div className="mt-[32px] flex flex-col items-start">
        <h1 className=" text-center text-[42px] font-['Rotter'] font-normal text-[#C9AC8C]">
          O’tkir Hoshimov
        </h1>
        <article className=" text-[rgba(255, 255, 255, 0.80)] text-[16px] font-normal font-[Steinberck] w-[620px] leading-[144.4%] mb-[15px]">
          Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi
          Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov
          mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti
          (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika kulliyotida
          oʻqish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963
          yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, “Transportniy rabochiy”
          gazetalarida xat tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng
          “Toshkent haqiqati” gazetasida adabiy xodim (1963–1966), “Toshkent
          oqshomi” gazetasida boʻlim mudiri (1966–1982), Gʻ. Gʻulom nomidagi
          Adabiyot va sanʼat nashriyotida bosh muharrir oʻrinbosari (1982–1985)
          boʻldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik
          qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy
          Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi.
          2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.
        </article>
        <div className="flex items-start gap-x-[10px] mb-[20px] ">
          <div className="py-[7px]">
            <img src={bayroqcha} alt="" />
          </div>
          <div>
            <p className="text-[#C9AC8C] text-[20px] font-normal font-['Rooter'] uppercase mb-[5px]">
              Ijodi
            </p>
            <p className="text-[14px] font-normal font-['Steinberck'] w-[350px] leading-[ 154.9%]">
              Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida
              ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga
              muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor
              qaytmaydi“ qissasi boʻldi.
            </p>
          </div>
        </div>

        <div className=" w-full">
          <div className=" flex items-center justify-between">
            <h2 className="text-[#C9AC8C] text-[31px] font-normal font-['Rotter'] uppercase">
              Asarlari
            </h2>
            <p className="font-['Steinbeck'] text-[16px] font-normal">
              Barchasini ko’rish
            </p>
          </div>
          <ul className="flex gap-x-[10px]">
            <li>
              <CardBook />
            </li>
            <li>
              <CardBook />
            </li>
            <li>
              <CardBook />
            </li>
            <li>
              <CardBook />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
