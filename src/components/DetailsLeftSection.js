import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineClockCircle,
  AiOutlineRight,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FaWhatsappSquare, IconName } from "react-icons/fa";

import "./styles/DetailsLeft.scss";

export default function DetailsLeftSection() {
  return (
    <div className="detailsLeftSection">
      <div className="headline">
        <img
          src="https://2.bp.blogspot.com/-PpIc1RtbeiI/VZFHETTHKBI/AAAAAAAAKuU/BU0HkCWXdUs/s1600/slider_01.jpg"
          alt="details-img"
        />
        <div className="navigate">
          <a href="/">
            <p>Home</p>
          </a>{" "}
          <AiOutlineRight />
          <a href="/">
            <p>Fashion</p>
          </a>{" "}
          <AiOutlineRight />
          <a href="/">
            <p>Photoraphy</p>
          </a>
        </div>
        <h1>14 Sundresses for When You Just Can't Deal With the Heat</h1>
        <div className="comment">
          <p>0</p>
          <p> Tien Nguyen</p>
          <p>
            <AiOutlineClockCircle /> May 12, 2015
          </p>
        </div>
      </div>
      <div className="content">
        <p>
          Mutant olympics news nike nunc eget nec iphone boss gotze. Nunc
          convallis and hours brazil elit commercial quis etiam. Suscipit global
          vitae vitae pistorius viverra leo hours shirley berlin. Pretium elit
          wall cube dictum netus schumacher temple julie sem lorde. Geldof
          tempus nibh semper audrey dignissim aliquet, habitasse melody. Scotish
          libero act purus people natoque ac ebola malaysia got michael. Apple
          nexus amal proin varius, morgan auctor shirley ferguson gayet rice.{" "}
          <br /> <br />
          Aenean donec nisi da ukraine joan senectus lander gotze vel. History
          molestie morgan turpis vel iniesta da searches. Global athletes
          feugiat fusce rivers pellentesque cowell. Aenean donald rhoncus watch
          eget, germany sagittis convallis. Walking egestas chile searches
          phelps mi ut searches rodriguez et watching. Bucket cube vestibulum
          temple act ridiculus wurst vel. Schumacher ipad gabriel interdum
          conchita wurst enim mi bowl. Air curabitur consequat love portugal
          etiam berlin winter watch. Brazil plus suarez moto phelps sapien
          imperdiet world fames. Neque videos cowell malaysia puppy cras
          tristique, battles amal vestibulum.
        </p>
        {/* <div className="img-to-left"> */}
        <p className="img-to-left">
          <img
            src="https://3.bp.blogspot.com/-DrQcd8h-Mz4/VLuu5jKseHI/AAAAAAAAJMw/Linw83uBvo4/s1600/travel_lost-memory-of-childhood_159K.jpg"
            alt=""
          />
          Nisl nibh watching lectus one kardashian global penatibus. Nisi philip
          donec mi nec ligula gravida robotic fames blandit fusce. Fringilla
          athletes talent bibendum, kiss ante giant. Joan adipiscing maecenas
          nexus while vestibulum urna enim. Budweiser mcconaughey audrey
          maecenas integer lorem amal quam. Integer sherman lawrence
          pellentesque jules, vel duis neque. Schumacher matthew proin, day air
          rap rubik lawrence loss ochoa. Cursus venenatis alamuddin love
          pharetra, vitae blind football. rap rubik lawrence loss ochoa. Cursus
          venenatis alamuddin love pharetra, vitae blind football. rap rubik
          lawrence loss ochoa. Cursus venenatis alamuddin love pharetra, vitae
          blind football.
        </p>
        <br />
        <p>
          Porttitor venenatis lorem sagittis mauris lander mutant. Feugiat the
          jared golden consectetur ante sodales integer nexus enim. Ridiculus
          facilisis quis molestie libero videos rooney trial while. Baby galaxy
          sapien brazil consequat lectus mauris facilisis sed nokia. Silva sochi
          malaysia love away euismod world electronics aliquam.
        </p>{" "}
        <br />
        <p className="img-to-right">
          <img
            src="https://2.bp.blogspot.com/-WpLeRc2UJdk/VLuudjzKBPI/AAAAAAAAJH8/w9VT4M0E1uM/s1600/fashion_accident-in-love_054K.jpg"
            alt=""
          />
          Mi donec blind suspendisse more seymour cristina mcconaughey. Rubik
          scotish ac gabriel world placerat jared pharetra wardega goku.
          Vulputate rodriguez quis bibendum proin fringilla phasellus.
          Commercial placerat bucket lorem malesuada sem note venenatis. Rooney
          challenge cube ipsum one gaza potenti joan praesent day commercial.
          Winner id pistorius is integer shirley tristique more francisco.
          History fusce rivers renee euismod attack news erat attack ultrices.
          Fermentum ferguson eget urna super praesent massa leto suscipit.
        </p>
        <p>
          Richard robin mutant suor audrey superman ullamcorper ramis nunc nunc.
          Montes lander maya ipsum rap joan gravida enim suor. Crimea test jared
          santos suspendisse lorem loss sociis commercial. Watch tortor
          ridiculus gabriel nunc scotish vestibulum doodles berlin. Samsung nam
          airlines consectetur fringilla leto iniesta facilisi maecenas.
          Facilisi molestie orci rubik proin hepburn rap sem argentina bucket
          pistorius. Guillermo pharetra eros nascetur vulputate als spider act
          blandit.
        </p>
        <img
          src="https://3.bp.blogspot.com/-95W5_fJloi0/VLuuO9DEb_I/AAAAAAAAJFs/wSt9rh64j-4/s1600/archi_kitchen-combine-multi-spaces_183K.jpg"
          alt=""
        />
        <p>
          Bend nokia natoque blandit donec, natoque consectetur pretium. Fusce
          ibrahimovic penatibus dapibus luis leo sa richard consectetur diam.
          Fusce cristina dictum lorem phelps ligula duis leo lauren hepburn da.
          Suarez football ice while israel parturient, bars germany duis da.
          Tempus augue shirley mandela sit porta, justo ac boss.
        </p>
      </div>

      <div className="share-container">
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          <div>
            <AiOutlineShareAlt />
          </div>
          <div>
            <p style={{ marginBottom: 0 }}> SHARE:</p>
          </div>
          <div>
            <AiFillTwitterSquare style={{ height: "20px" }} />
          </div>
          <div>
            <AiFillFacebook />
          </div>
          <div>
            <FaWhatsappSquare />
          </div>
        </div>
        <input placeholder="link to be copied" />
      </div>
    </div>
  );
}
