lost image<template>
    <div style="background-color: #dadbe0" class="wrapper">
      <HomePageMobile v-if="isMobile"></HomePageMobile>
      <b-navbar v-if="!isMobile" id="nav"  :sticky="true" style="color: darkblue; padding-top: 0px;" type="Dark">
        <b-navbar-brand href="#">
          <transition name="fade">
            <img v-if="Boo" :key="Boo" style=" width: 20vw; position: absolute;  z-index: -3; transform: translateX(-16px); top:0;" src="../../assets/images/ManageIT_Background2.png" alt="Ahh">
          </transition>
          <transition name="fade">
            <img v-if="Boo" :key="Boo" class="NavMiddle" style="width: 41vw; height: 5.4vh; position: absolute; top: 0; z-index: -4; transform: translateX(18vw);" src="../../assets/images/ManageIT_Background_Line.png" alt="Ahh">
          </transition>
          <transition name="fade">
            <img v-if="Boo" :key="Boo" style="position: absolute; top: 0; z-index: -4; right: 0; width: 42vw;" src="../../assets/images/ManageIT_Background_Options.png" alt="Ahh">
          </transition>
          <router-link  to="/">
            <transition name="fade">
              <img v-if="Boo" :key="Boo" style="position: absolute; top: 10%; left: 1%; width: 15vw;" src="../../assets/images/manageit-digital_logo.png" alt="Ah shit lost it again">
            </transition>
            <transition name="fade">
              <img v-if="!Boo" :key="Boo" style="position: absolute; top: 10%; left: 1%; width: 15vw;" src="../../assets/images/manageit-digital_logoWhite.png" alt="Ah shit lost it again">
            </transition>

          </router-link>
        </b-navbar-brand>










        <b-collapse id="ml-auto" is-nav right>
          <b-navbar-nav class="ml-auto" id="RightLinks">
            <b-nav-item class="nav-link"  href="#" >
              <router-link tag="div" to="/AboutUs"><div class="NavItem"><h2 class="NavTitle">About Us</h2> <div class="NavLine"></div></div></router-link>
            </b-nav-item>
            <b-nav-item class="nav-link"  href="#" >
              <router-link tag="div" to="/OurServices"><div class="NavItem"><h2 class="NavTitle">Our Services</h2> <div class="NavLine"></div></div></router-link>
            </b-nav-item>
            <b-nav-item  class="nav-link"  href="#" >
              <router-link tag="div" to="/ContactUs"> <div class="NavItem"><h2 class="NavTitle">Contact Us</h2> <div class="NavLine"></div></div></router-link>
            </b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

      <OurServicesTitle></OurServicesTitle>
      <SLAPackages id="Packages"></SLAPackages>
      <OurServicesIcons id="Services" style="transform: translateY(50px)"></OurServicesIcons>


      <div style="padding-top: 90px; position: relative; z-index: 1;" id="ItemOne"  class="ServiceItem">
        <img class="Divider" style=" position: relative; z-index: 1; width: 100vm; right: 0; transform: translateY(-90px)"  src="../../assets/images/DividerChunk3.png" alt="Ah shit lost it again">
        <img class="ServiceIcon" id="IconOne" style="opacity: 0.1;" src="../../assets/images/svg/computerSystems.png" alt="Ah shit lost it again">

        <h1 class="ServiceNumber " style="opacity: 0.1;"  v-if="!isMobile" >01</h1>
        <div class="ServiceContent">

          <h1 style="opacity: 100%;"   class="ServiceTitle" > Computer Systems </h1>
          <div id="Line1" class="ServiceLineTitle"></div>
        </div>
        <p style="opacity: 100%;"   class="ServiceTopContent">
          Step out of the Dark Ages in IT with the latest computer systems. <br>
          <br>
          Like nature and the human species, information and computer systems continually evolve. Working on outdated technology platforms and software affects your productivity, not to mention your patience!
        </p>
        <transition name="ReadMoreTrans">
            <p style="opacity: 100%;"   class="ReadMore" v-if="this.ReadMoreArray[0].ReadBool" :key="this.ReadMoreArray[0].ReadBool">
              The type of computer system you choose needs to have compatible elements, be specific to your business and operate with as few hitches as possible - regardless if it's hardware, software, robust servers, secure backup systems, specific network capabilities or even devices for work done remotely.<br>

              Solid yet flexible computer systems allow you to get on with the job, without interruption. <br><br><br> IT infrastructure needs to be prepared for the possibility of security breaches, denial of service attacks and power failures.

              The advantage of an up-to-date computer system is that it keeps business productivity levels up. As technology progresses, your IT computer systems need to follow suit so you can communicate with suppliers and customers, using compatible technology.<br><br>

              Having a secure yet malleable and easy-to-adapt computer system helps your business organise data, store and backup vital information, and - with faster processors and updated software - provide rapid and accurate results for reporting and feedback.<br>

              With Manage IT, you'll get all the software, technology and information systems you need. Best of all, we'll also install everything and show you the ropes, ensuring that you're up to speed and know your way around the new technology and software.<br>

              Boost your productivity levels and get your business back on track with Manage IT. Contact us today.<br>
            </p>
        </transition>
        <div class="ArrowAudjust">
          <div id="Arrow1" class="Arrow" style=""  @click="TransitionOn(0)">
            <i v-if="!this.ReadMoreArray[0].ReadBool" class="ArrowIcon"></i>
            <i v-if="this.ReadMoreArray[0].ReadBool" class="ArrowIconUp"></i>
          </div>
        </div>
        <img  id="Divder1" class="Divider" style=""  src="../../assets/images/DividerChunk3.png" alt="Ah shit lost it again">
      </div>




      <div id="ItemTwo"  class="ServiceItem">
        <img class="ServiceIcon" id="IconTwo" style=" opacity: 0.1; "  src="../../assets/images/svg/breakfixServices.png" alt="Ah shit lost it again">
        <h1 class="ServiceNumber" style="opacity: 0.1;"  v-if="!isMobile" >02</h1>
        <div class="ServiceMegaContent">
          <div class="ServiceContent">
            <h1 style="opacity: 100%;"   class="ServiceTitle"> Break/Fix Support </h1>
            <div id="Line2" class="ServiceLineTitle"></div>
          </div>
          <p style="opacity: 100%;"   class="ServiceTopContent">
            Not ready yet for a contract or fully managed support solution? Try our Break Fix support for any hardware and software problem.
          </p>
          <transition name="ReadMoreTrans">
            <p style="opacity: 100%;"   class="ReadMore" v-if="this.ReadMoreArray[1].ReadBool" :key="this.ReadMoreArray[1].ReadBool">
              Our Break Fix support provides peace of mind for any IT issues you may encounter. Our professional team of engineers and extensive expertise, support multi-vendor hardware and software platforms.

              A solution that is best suited for those businesses that have small IT requirements, limited funding, or where the business already has internal support.
            </p>
          </transition>
          <div class="ArrowAudjust">
            <div id="Arrow2" class="Arrow" style=""  @click="TransitionOn(1)">
              <i v-if="!this.ReadMoreArray[1].ReadBool" class="ArrowIcon"></i>
              <i v-if="this.ReadMoreArray[1].ReadBool" class="ArrowIconUp"></i>
            </div>
          </div>
          <img  id="Divder2" class="Divider" style=""  src="../../assets/images/DividerChunk3.png" alt="Ah shit lost it again">
        </div>
      </div>





      <div id="ItemThree"  class="ServiceItem">
        <img class="ServiceIcon" style=" opacity: 0.1; "  src="../../assets/images/svg/ServerManagement.png" alt="Ah shit lost it again">
        <h1 class="ServiceNumber" style="opacity: 0.1;"  v-if="!isMobile" >03</h1>
        <div style="transform: translateY(-185px)" class="ServiceMegaContent">
          <div class="ServiceContent">
            <h1 style="opacity: 100%;"   class="ServiceTitle" > Server Management </h1>
            <div id="Line3" class="ServiceLineTitle"></div>
          </div>
          <p style="opacity: 100%;"   class="ServiceTopContent">
            Servers & cloud computing: matching a (virtual) server to your data needs.
            When it comes to small business servers, virtual servers or cloud computing, there are a myriad of server options. Selecting the right fit for your network size,
            backup preferences and data requirements will reduce downtime, facilitate faster installation of new applications, give you the option of managing email and even hosting your own website.
            </p>
          <transition name="ReadMoreTrans">
            <p style="opacity: 100%;"   class="ReadMore" v-if="this.ReadMoreArray[2].ReadBool" :key="this.ReadMoreArray[2].ReadBool">
              <br><br><b>Cloud Computing</b><br><br>
              The trend toward cloud computing simply involves moving your data storage and/or setting up specific business applications on the internet, so the data or software is not stored at your office or workplace. Benefits of cloud computing include the increased ability to access data remotely, reduced hardware outlays and upgrades, and the reassurance of off-site storage for backup and recovery – an advantage in the event of another earthquake. Cloud computing works best when you have a high-speed data cable for internet connections. If your internet connection is based on copper wires or is unreliable, then cloud computing may not be the ideal solution.


              <br><br><br><b>Small Business Servers</b><br><br>
              Increasing workloads place increasing demands on your servers. With a proven track record of successful installation, we can help to specify and source a small business server to store and traffic your data, whether you've got 4 computers in your office or 400! Our server-based computing solutions offer a range of features, including:

              <br><em>Extensive research and development behind each solution design</em><br>
              <em>Seamless, reliable and predictable user experience</em><br>
              <em>Consistent performance</em><br>
              <em>Full-feature functionality</em><br>
              <em>Extends application access to employees, business partners, vendors and customers</em><br>


              <br><br><br><b>Virtual Server Options</b><br><br>
              A virtual server is popular for businesses with large data storage needs, proprietary software, multiple websites, or a strong online presence. Because your website is hosted on its own [usually large] server, you don't have to compete with other websites for access. A virtual server is more secure than shared servers and enables you to create your own software programmes.

              Take the guesswork out of choosing servers for your business computer systems. Talk to us about selecting the server management system that will optimise your business, not jeopardise it.


             <br><br><br><b>Service Agreements</b><br><br>
              If you have a sizeable network which requires multiple software installations and servicing there are benefits of partnering in our regular, server-based computing service:

              Rapid deployment of applications and accelerated upgrades
              Instant on-delivery of applications from a single point over any connection
              Utilisation of standard products and technologies
              Reduced remote servicing costs.
              Passing on responsibility
            </p>
          </transition>
          <div class="ArrowAudjust">
            <div id="Arrow3" class="Arrow" style=""  @click="TransitionOn(2)">
              <i v-if="!this.ReadMoreArray[2].ReadBool" class="ArrowIcon"></i>
              <i v-if="this.ReadMoreArray[2].ReadBool" class="ArrowIconUp"></i>
            </div>
          </div>
          <img  id="Divder3" class="Divider" style=""  src="../../assets/images/DividerChunk3.png" alt="Ah shit lost it again">
        </div>
      </div>


      <div id="ItemFour"  class="ServiceItem">
        <img class="ServiceIcon" style=" opacity: 0.1; "  src="../../assets/images/svg/disasterRecovery.png" alt="Ah shit lost it again">
        <h1 class="ServiceNumber " style="opacity: 0.1;"  v-if="!isMobile" >04</h1>
        <div style="transform: translateY(-185px)" class="ServiceMegaContent">
          <div class="ServiceContent">
            <h1 style="opacity: 100%;" class="ServiceTitle" > Disaster Recovery </h1>
            <div id="Line4" class="ServiceLineTitle"></div>
          </div>
          <p style="opacity: 100%;"   class="ServiceTopContent">
            Backup and recovery: Manage IT disaster recovery
          </p>
          <transition name="ReadMoreTrans">
            <p style="opacity: 100%;"   class="ReadMore" v-if="this.ReadMoreArray[3].ReadBool" :key="this.ReadMoreArray[3].ReadBool">
              <br><br><b>We're your backup and recovery experts.</b><br>
              Why does your business need a backup and recovery plan? Being prepared and organised to mitigate the risk of outages through IT disaster recovery is extremely important for any company. From virus infections to accidental fire, flood and even malicious damage, you need to have procedures in place to combat any level of threat – not to mention seismic wobbles!

              Manage IT can help you to prepare a disaster recovery plan for your IT systems, by reviewing and establishing roust backup and recovery protocols. Like all disaster plans, few companies prepare for them fully until something actually happens and by then it's too late. Considering disaster recovery IT procedures is important for the continued success of your business.

              At Manage IT, we can provide on-site and/or external backup and recovery options that best suit your business needs and requirements at an appropriate price. This can be provided through mixture of solutions locally attached storage, cloud-based storage, or even high-availablility virtualisation.

              Formalising the defined disaster recovery strategy under a service level agreement (SLA) ensures that the strategy is regularly checked and maintained, providing you with assurance that the solution is working and that we have an agreed formalised backup and recovery action plan to address the problem should the managed system fail.

              For most clients it is always our recommendation that an image-based disaster recovery strategy is implemented. It is a well established solution that captures the entire build of the computer and allows you to transfer this build to another piece of hardware within a few hours (depending on the amount of data). As required, we can respond by providing a same-day spare machine, a complete network refresh, or an overnight office refit – whatever the situation demands.

              <br><br><b>Tips to consider when putting together a backup and recovery plan:</b><br>
              1. Critical Information:
              Ask yourself a simple question. If we had a major failure where all critical data was lost, how long could the business function before it would negatively impact on its operation? The answer to this question should define the customised backup and recovery strategy to meet your requirements.

              <br><br><b>Virtual Server Options</b><br>
              A virtual server is popular for businesses with large data storage needs, proprietary software, multiple websites, or a strong online presence. Because your website is hosted on its own [usually large] server, you don't have to compete with other websites for access. A virtual server is more secure than shared servers and enables you to create your own software programmes.

              Take the guesswork out of choosing servers for your business computer systems. Talk to us about selecting the server management system that will optimise your business, not jeopardise it.


              <br><br><b>2. Basic Critical Data Requirements (Traditional Strategies):</b><br>
              Any data that is stored either on a local computer and/or in the cloud, should include a basic level of redundancy. This includes redundancy around the hard drives which house the data through to capturing the critical data to an external device that can be stored off site (e.g. tape streamer, RDX, DVD and/or external hard drive).
              <br><br><b>3. Cloud Storage:</b><br>
              Since the earthquakes, cloud storage has been in increased demand. Designed to capture incremental files changed in a local data repository through to data and computer changes at an image level, this solution is becoming a preferred disaster recovery IT strategy. Providing the assurances around the backup being off site, provisioning for archival retrieval and as required restoration from a flat file through to a virtualised computer on the internet, the cloud storage solution is becoming the preferred solution.
              <br><br><b>4. Complete Failure:</b><br>
              In the event of a complete disaster where your office is totally inaccessible, we can retrieve your backup data and install either onto loan equipment, new equipment and/or in a virtualised environment based in the cloud or locally on site so as to allow your business to get back onto its feet.

              Talk to our Manage IT team about your backup and recovery requirements. It doesn't matter if your desktop needs replacement parts or your entire network needs to be replicated off-site, Manage IT provide the reassurance and peace of mind you welcome from disaster recovery IT experts.
            </p>
          </transition>
          <div class="ArrowAudjust">
            <div id="Arrow4" class="Arrow" style=""  @click="TransitionOn(3)">
              <i v-if="!this.ReadMoreArray[3].ReadBool" class="ArrowIcon"></i>
              <i v-if="this.ReadMoreArray[3].ReadBool" class="ArrowIconUp"></i>
            </div>
          </div>
          <img  id="Divder4" class="Divider" style=""  src="../../assets/images/DividerChunk3.png" alt="Ah shit lost it again">
        </div>
      </div>



      <div id="ItemFive"  class="ServiceItem">
        <img class="ServiceIcon" style=" opacity: 0.1; "  src="../../assets/images/svg/networking.png" alt="Ah shit lost it again">
        <h1 class="ServiceNumber" style="opacity: 0.1;"  v-if="!isMobile" >05</h1>
        <div style="transform: translateY(-185px)" class="ServiceMegaContent">
          <div class="ServiceContent">
            <h1 style="opacity: 100%;" class="ServiceTitle" > Networking </h1>
            <div id="Line5" class="ServiceLineTitle"></div>
          </div>
          <p style="opacity: 100%;"   class="ServiceTopContent">
            <b>Network consulting: network support & computing for your business</b><br><br>
            Your computer networking needs grow with your business. When there's an outage, Manage IT's remote network consulting service means we can be there faster – even if we're there in a 'virtual' sense.
          </p>
          <transition name="ReadMoreTrans">
            <p style="opacity: 100%;"   class="ReadMore" v-if="this.ReadMoreArray[4].ReadBool" :key="this.ReadMoreArray[4].ReadBool">
              <br><br><b>What we do </b><br>
              Manage IT's network support covers many areas. Perhaps you're integrating new smartphones and tablets, or are increasing flexibility for staff by providing remote access. Your computer networking needs to be robust and restrict access to confidential information with security protocols.

              Our network consulting experts provide all the necessary hardware including network interface cards, repeaters and hubs, bridges, routers as well as firewalls, ensuring that your network performance levels are optimised with enhanced security options for protection.

              Our various network support packages provide more information about the type of network consulting we specialise in.

              We also understand that different companies require different networks. It doesn't matter if you need a personal area network (PAN), local area network (LAN), wide area network (WAN) or virtual private network (VPN), Manage IT can set up the network that best suits your business.

            </p>
          </transition>
          <div class="ArrowAudjust">
            <div id="Arrow5" class="Arrow" style=""  @click="TransitionOn(4)">
              <i v-if="!this.ReadMoreArray[4].ReadBool" class="ArrowIcon"></i>
              <i v-if="this.ReadMoreArray[4].ReadBool" class="ArrowIconUp"></i>
            </div>
          </div>
          <img  id="Divder5" class="Divider" style="z-index: 0; width: 100vm; right: 0"  src="../../assets/images/DividerChunk3.png" alt="Ah shit lost it again">
        </div>
      </div>


      <div id="ItemSix" name="ItemSix"  class="ServiceItem">
        <img class="ServiceIcon" style=" opacity: 0.1; "  src="../../assets/images/svg/databaseManagement.png" alt="Ah shit lost it again">
        <h1 class="ServiceNumber " style="opacity: 0.1;"  v-if="!isMobile" >06</h1>
        <div style="transform: translateY(-185px)" class="ServiceMegaContent">
          <div class="ServiceContent">
            <h1 style="opacity: 100%;"   class="ServiceTitle" > Database Management </h1>
            <div id="Line6" class="ServiceLineTitle"></div>
          </div>
          <p style="opacity: 100%;"   class="ServiceTopContent">
            <b>Manage IT provide and prove quicker financial returns with the client</b><br><br>
            Our database management team can deliver any database solution from single-user desktop versions to full client server architecture, based on either Microsoft SQL Servers or Microsoft Access. Manage IT specialise in delivering functionally powerful database management solutions quickly and economically, and in the most feasible way for your organisation.
          </p>
          <transition name="ReadMoreTrans">
            <p style="opacity: 100%;"   class="ReadMore" v-if="this.ReadMoreArray[5].ReadBool" :key="this.ReadMoreArray[5].ReadBool">
              When it comes to your database, management solutions, Manage IT are focused on your organisation’s own processes. We work to enhance these processes and the overall business.

              Our database management is flexible around how you want to work and we strive to successfully integrate our task into each customer’s individual operations/methodologies.

              <br><br><b>Understanding your data</b><br>
              Key to everything we do is gaining a complete understanding of your data. Its use. Its structure. Its lifecycle. Its process.

              We look to understand the importance of your data, how it flows through your organisation and how it empowers and enables your business.

            </p>
          </transition>
          <div class="ArrowAudjust">
            <div id="Arrow6" class="Arrow" style=""  @click="TransitionOn(5)">
              <i v-if="!this.ReadMoreArray[5].ReadBool" class="ArrowIcon"></i>
              <i v-if="this.ReadMoreArray[5].ReadBool" class="ArrowIconUp"></i>
            </div>
          </div>
          <img  id="Divder6" class="Divider" style=""  src="../../assets/images/DividerChunk3.png" alt="Ah shit lost it again">
        </div>
      </div>


      <div id="ItemSeven"  class="ServiceItem">
        <img class="ServiceIcon" style=" opacity: 0.1; "  src="../../assets/images/svg/security.png" alt="Ah shit lost it again">
        <h1 class="ServiceNumber" style="opacity: 0.1;"  v-if="!isMobile" >07</h1>
        <div style="transform: translateY(-185px)" class="ServiceMegaContent">
          <div class="ServiceContent">
            <h1 style="opacity: 100%;"   class="ServiceTitle" > Security </h1>
            <div id="Line7" class="ServiceLineTitle"></div>
          </div>
          <p style="opacity: 100%;"   class="ServiceTopContent">
            <b>Manage IT – Your Network and IT Systems' Bodyguard</b><br><br>
            We're not dressed up in black suits with dark glasses and earpiece communication devices. We do however have a number of options to keep a close eye on the security of your business' computing systems, ensuring that the mafia are not infiltrating your network.
          </p>
          <transition name="ReadMoreTrans">
            <p style="opacity: 100%;"  class="ReadMore" v-if="this.ReadMoreArray[6].ReadBool" :key="this.ReadMoreArray[6].ReadBool">
              Security standards are always changing to keep up with the fast pace of the IT world. This is why it's so important to use an IT consulting company like Manage IT.
              We keep our eyes on the ball, adapting to changes as they happen, providing your IT infrastructure with the latest and most secure security systems available.

              Our various external and internal security measures include:

              <br><br><b>External measures</b><br>
              Security audits<br>
              Hardware firewalls (managed and unmanaged)<br>
              Email relay tests - These tests ensure that the email server on your network does not allow other email servers to connect and send email via it. Spammers often locate an open relay server and exploit it to send spam.<br>
              Hosted and on-premise email and proxy filters – Threat metrics scan for viruses, spam and other potential threats.<br>
              <br><br><b>Internal measures</b><br>
              User Account Policy - Account policies are the rules that control user account authentication parameters. <br>
              Password protection - Password policies can define specific password requirements such as maximum password age, minimum length, account lockout, failed login attempts etc. <br>
              Security Accounts – Certain network authority accounts can have elevated priveleges on the network. <br>
              VPN Access – You can specify the users that should have the ability to access the network remotely via a VPN connection. <br>
              <br><br>
              We also provide summary reports with security updates and recommendations regarding your network. When required we can also provide a comprehensive security audit which is completed by a third party security specialist. You can read more about these in our different business IT support service packages.

            </p>
          </transition>
          <div class="ArrowAudjust">
            <div id="Arrow7" class="Arrow" style=""  @click="TransitionOn(6)">
              <i v-if="!this.ReadMoreArray[6].ReadBool" class="ArrowIcon"></i>
              <i v-if="this.ReadMoreArray[6].ReadBool" class="ArrowIconUp"></i>
            </div>
          </div>
          <img  id="Divder7" class="Divider" style=""  src="../../assets/images/DividerChunk3.png" alt="Ah shit lost it again">
        </div>
      </div>


      <div id="ItemEight" style="margin-bottom: -200px"  class="ServiceItem">
        <img class="ServiceIcon" style=" opacity: 0.1; "  src="../../assets/images/svg/cloudComputing.png" alt="Ah shit lost it again">
        <h1 class="ServiceNumber" style="opacity: 0.1;"  v-if="!isMobile" >08</h1>
        <div style="transform: translateY(-185px)" class="ServiceMegaContent">
          <div class="ServiceContent">
            <h1 style="opacity: 100%;"   class="ServiceTitle" > Cloud computing </h1>
            <div id="Line8" class="ServiceLineTitle"></div>
          </div>
          <p style="opacity: 100%;"   class="ServiceTopContent">
            <b>Generally speaking the 'Cloud' refers to the internet;<br><br>
            So Cloud computing is computing over the internet. <br></b>
            The value to Cloud varies. The main benfits include the scope you can create to focus on other things by giving responsibilty for maintenance and upkeep of servers and software to someone else; the peace of mind that comes with knowing you can go about your business from anywhere you can find an internet connection, not be exposed to the downtime risks associated with a fixed location; and finally, having the ability to bring greater certainty to cashflow by replacing irregular and often heavy capital expenditure with regular and predictable operational expenditure.
          </p>
          <transition name="ReadMoreTrans">
            <p style="opacity: 100%;"  class="ReadMore" v-if="this.ReadMoreArray[7].ReadBool" :key="this.ReadMoreArray[7].ReadBool">


              <br><br><b>TALK OVER DATA FOR THIS ONE NO IDEA REALLY</b><br>
              Security audit<br>
              Hardware firewalls (managed and unmanaged)<br>
              Email relay tests - These tests ensure that the email server on your network does not allow other email servers to connect and send email via it. Spammers often locate an open relay server and exploit it to send spam.<br>
              Hosted and on-premise email and proxy filters – Threat metrics scan for viruses, spam and other potential threats.<br>
              <br><br><b>Internal measures</b><br>
              User Account Policy - Account policies are the rules that control user account authentication parameters. <br>
              Password protection - Password policies can define specific password requirements such as maximum password age, minimum length, account lockout, failed login attempts etc. <br>
              Security Accounts – Certain network authority accounts can have elevated priveleges on the network. <br>
              VPN Access – You can specify the users that should have the ability to access the network remotely via a VPN connection. <br>
              <br><br>
              We also provide summary reports with security updates and recommendations regarding your network. And when required we can provide a comprehensive security audit which is completed by a third party security specialist. You can read more about these in our different business IT support service packages.

            </p>
          </transition>
          <div class="ArrowAudjust">
              <div id="Arrow8" class="Arrow" style=""  @click="TransitionOn(7)">
                <i v-if="!this.ReadMoreArray[7].ReadBool" class="ArrowIcon"></i>
                <i v-if="this.ReadMoreArray[7].ReadBool" class="ArrowIconUp"></i>
              </div>

          </div>
          <img  id="Divder8" class="Divider" style=""  src="../../assets/images/DividerChunk3.png" alt="Ah shit lost it again">
        </div>

      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import OurServicesIcons from "./OurServicesIcons";
  import OurServicesTitle from "./OurServicesTitle";
  import SLAPackages from "./SLAPackages";
  import Footer from "../Footer";

  import HomePageMobile from "../HomePageMobile";
  import {EventBus} from "../../App";
  import JQuery from 'jquery';
  let $ = JQuery;
    export default {
        name: "OurServices",
      components: {HomePageMobile, SLAPackages, OurServicesTitle, OurServicesIcons, Footer},
      data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          ReadMoreOne: false,
          TransitionOne: false,
          Boo: false,
          opacityVal: 0,
          ReadMoreArray: [
            {ReadBool: false, TransitionBool: "Divder1", Line: "Line1", Arrow: "Arrow1", DaddyNode: "#ItemOne", Top: 150},
            {ReadBool: false, TransitionBool: "Divder2", Line: "Line2", Arrow: "Arrow2", DaddyNode: "#ItemTwo", Top:-300},
            {ReadBool: false, TransitionBool: "Divder3", Line: "Line3", Arrow: "Arrow3", DaddyNode: "#ItemThree", Top: -300},
            {ReadBool: false, TransitionBool: "Divder4", Line: "Line4", Arrow: "Arrow4", DaddyNode: "#ItemFour", Top: -300},
            {ReadBool: false, TransitionBool: "Divder5", Line: "Line5", Arrow: "Arrow5", DaddyNode: "#ItemFive", Top: -300},
            {ReadBool: false, TransitionBool: "Divder6", Line: "Line6", Arrow: "Arrow6", DaddyNode: "#ItemSix", Top: -300},
            {ReadBool: false, TransitionBool: "Divder7", Line: "Line7", Arrow: "Arrow7", DaddyNode: "#ItemSeven", Top: -300},
            {ReadBool: false, TransitionBool: "Divder8", Line: "Line8", Arrow: "Arrow8", DaddyNode: "#ItemEight", Top: -300}
          ],
          isMobile: false,
        }
      },
      methods: {
        onResize () {
          console.log("Resize called coming in: "+ window.innerWidth < 800);
          this.isMobile = window.innerWidth < 800
        },

        TransitionOn(Int) {
          //transform: translateY(-230px); Divider
          //transform: translateY(6px); Arrow
          setTimeout(() => {if(this.ReadMoreArray[Int].ReadBool === false) {
            document.getElementById(this.ReadMoreArray[Int].TransitionBool).style.transform = "translateY(0px)";
            document.getElementById(this.ReadMoreArray[Int].Arrow).style.transform = "translateY(236px)";
            document.getElementById(this.ReadMoreArray[Int].TransitionBool).style.opacity = "0%";
            document.getElementById(this.ReadMoreArray[Int].Line).style.width = "100%";
            setTimeout(() => {
              this.ReadMoreArray[Int].ReadBool = true
              document.getElementById(this.ReadMoreArray[Int].TransitionBool).style.opacity = null;
              document.getElementById(this.ReadMoreArray[Int].Arrow).style.transform = "translateY(136px)";
              document.getElementById(this.ReadMoreArray[Int].TransitionBool).style.transform = "translateY(-100px)";},300);
          } else {
            $('html, body').animate({
              scrollTop: $(this.ReadMoreArray[Int].DaddyNode).offset().top + this.ReadMoreArray[Int].Top
            }, 600);
            document.getElementById(this.ReadMoreArray[Int].Line).style.width = null;
            this.ReadMoreArray[Int].ReadBool = false;
            document.getElementById(this.ReadMoreArray[Int].TransitionBool).style.transform = "translateY(-150px)";
            document.getElementById(this.ReadMoreArray[Int].Arrow).style.transform = "translateY(86px)";
            document.getElementById(this.ReadMoreArray[Int].TransitionBool).style.opacity = "0%";
            setTimeout(() => {
              document.getElementById(this.ReadMoreArray[Int].TransitionBool).style.opacity = null;
              document.getElementById(this.ReadMoreArray[Int].Arrow).style.transform = null;
              document.getElementById(this.ReadMoreArray[Int].TransitionBool).style.transform = null;},300);
          }}, 100);

        }
      },
      mounted() {
        window.onload = this.onResize();
        let self = this;
        EventBus.$on('MobileSize', changed => {
          console.log(`Oh, that's nice. It's gotten ${changed} clicks! :)`);
          self.isMobile = changed;
        });
        window.onload = EventBus.$emit('PageLoaded', true);

        function offsetAnchor() {
          if (location.hash.length !== 0) {
            window.scrollTo(window.scrollX, window.scrollY - 300);
          }
        }

      // Captures click events of all a elements with href starting with #
        $(document).on('click', 'a[href^="#"]', function() {
          window.setTimeout(function() {
            offsetAnchor();
          }, 0);
        });

        // Set the offset when entering page with hash present in the url
        window.setTimeout(offsetAnchor, 0);


        this.$nextTick(function(){
          window.addEventListener("scroll", function(){
            var navbar = document.getElementById("nav");
            var navlink = document.getElementsByClassName("nav-link");
            var nav_classes = null;
            if(navbar != null) {
               nav_classes = navbar.classList;
            }





            // console.log(nav_classes);
            // this.ChangeSeeThrough(document.documentElement.scrollTop);
            // console.log(this.GetSeeThrough());
            self.Scrolled = document.documentElement.scrollTop;
            if(document.documentElement.scrollTop >= 50) {
              self.Boo = true;
              if(nav_classes != null) {
                if (nav_classes.contains("stuck") === false) {
                  nav_classes.toggle("stuck");

                  for (var i = 0; i < navlink.length; i++) {
                    navlink[i].style.color = "#" + '495d68';
                    navlink[i].style.textShadow = "0px 0px black";
                  }

                }
              }

            } else {
              self.Boo = false;
              if(nav_classes != null) {
                if (nav_classes.contains("stuck") === true) {
                  nav_classes.toggle("stuck");
                  for (var x = 0; x < navlink.length; x++) {

                    navlink[x].style.color = "#" + 'E0FBFC';
                    navlink[x].style.textShadow = "0px 1px black";
                  }
                }
              }

            }

          })
        });

      }
    }
</script>

<style scoped>

  .ServiceItem {
    overflow: hidden; max-width: 100%;
  }

  .ServiceLineTitle {
    transform: translateY(-47px);
    border-bottom: 4px solid #859e30;
    width: 35%;
    height: 0px;
    transition: 2s;
  }
  .Divider {
    transform: translateY(-58%);
    transition: 1s;
    z-index: 0; width: 100vw; right: 0
  }

  #IconTwo {
    transform: translate(-700px, -200px); height: 425px
  }

  #IconOne {
    transform: translate(-120px, -140px); height: 475px
  }

  .Arrow {
    height: 150px;
    width: 600px;
    margin: 0 auto;
    z-index: 1;
    position: relative;
    transform: translateY(6px);
    background-image: url("../../assets/images/ArrowGraident.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
    transition: 1s;
  }
  .Arrow:hover {
    background-size: 120% 200%;
    background-position: 50% 0;
    cursor: pointer;
  }
  .Arrow:hover > .ArrowIcon {
    border-width: 0px 7px 7px 0;
    height: 50px;
    width: 50px;
    transform: rotate(45deg) translate(50px, 50px);
    border-radius:0px 25px;
    transition: 1s;
  }
  .Arrow:hover > .ArrowIconUp {
    border-width: 0px 7px 7px 0;
    height: 50px;
    width: 50px;
    transform: rotate(225deg) translate(-50px, -50px);
    border-radius:0px 25px;
    transition: 1s;
  }
  .ArrowIconUp {
    border: solid black;
    border-width: 0px 5px 5px 0;
    display: inline-block;
    padding: 10px 10px 10px 10px;

    height: 30px;
    width: 30px;
    transform: rotate(225deg) translate(-35px, -35px);
    border-radius:0px 15px;
    transition: 1s;
  }
  .ArrowIcon {
    border: solid black;
    border-width: 0px 5px 5px 0;
    display: inline-block;
    padding: 10px 10px 10px 10px;

    height: 30px;
    width: 30px;
    transform: rotate(45deg) translate(35px, 35px);
    border-radius:0px 15px;
    transition: 1s;
  }

  .Arrow:active > .ArrowIcon{
    animation-name: arrowClicked;
    animation-delay: 0s;
    animation-duration: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;

  }

  .Arrow:active > .ArrowIconUp{
    animation-name: arrowClickedUp;
    animation-delay: 0s;
    animation-duration: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;

  }

  @keyframes arrowClickedUp {
    from {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(225deg) translate(-45px, -45px);
      transform: scale3d(1.1, 1.1, 1.1) rotate(225deg) translate(-45px, -45px);

    }

    50% {
      -webkit-transform: scale3d(1, 1, 1) rotate(225deg) translate(-50px, -50px);
      transform: scale3d(1, 1, 1) rotate(225deg) translate(-50px, -50px);
      border-radius: 0 30px 0px 30px;
    }

    to {
      -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate(225deg) translate(-55px, -55px);
      transform: scale3d(0.9, 0.9, 0.9) rotate(225deg) translate(-55px, -55px);
      border-radius: 0 30px 0 30px;
    }
  }

  @keyframes arrowClicked {
    from {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate(45deg) translate(45px, 45px);
      transform: scale3d(1.1, 1.1, 1.1) rotate(45deg) translate(45px, 45px);

    }

    50% {
      -webkit-transform: scale3d(1, 1, 1) rotate(45deg) translate(50px, 50px);
      transform: scale3d(1, 1, 1) rotate(45deg) translate(50px, 50px);
      border-radius: 0 30px 0px 30px;
    }

    to {
      -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate(45deg) translate(55px, 55px);
      transform: scale3d(0.9, 0.9, 0.9) rotate(45deg) translate(55px, 55px);
      border-radius: 0 30px 0 30px;
    }
  }


  #Divder1 {
    transition: 1s;
  }

  .ReadMoreTrans-enter-active {
    transition: all 1s ease;

  }
  .ReadMoreTrans-leave-active {
    transition: all .5s;
  }
  .ReadMoreTrans-enter, .ReadMoreTrans-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(800px);
    opacity: 0;
  }

  .ReadMoreDividerTrans-enter-active {
    transition: all 1s ease;
  }
  .ReadMoreDividerTrans-leave-active {
    transition: all .5s;
  }
  .ReadMoreDividerTrans-enter, .ReadMoreDividerTrans-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    padding-top: 200px;
    opacity: 0;
  }


  .ServiceIcon {
    position: absolute;
    opacity: 10%;
    transform: translate(-100%, -70%);
    height: 47%
  }

  .ServiceNumber {
    position: absolute;
    opacity: 10%;
    transform: translate(70vw, -200px);
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    font-size: 350px;
    color: #495d68;
    bottom: auto;
    overflow-y: hidden;
  }

  .ServiceContent {
    display: inline-block;
    padding-top: 240px;
    padding-left: 0%;
  }

  .ServiceTitle {
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    font-size: 140px;
    color: #495d68;
    position: relative;
    z-index: 1;
    opacity: 100%;

  }

  .ServiceTopContent {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 25px;
    color: #495d68;
    padding-left: 13%;
    padding-right: 20%;
    transform: translateY(0%);
    opacity: 80%
  }
  .ReadMore {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 25px;
    color: #495d68;
    padding-left: 13%;
    padding-right: 20%;
  }
  .ServiceMegaContent {
    transform: translateY(-100px);
  }





  nav {
    background-color: black;
    transition: all 0.1s;
  }
  #nav {

  }
  nav.stuck {
    padding-top: 0px;
    background: none;
  }

  .navbar {
    z-index:10;
    width:100%;
    height: 70px;
  }
  .navbar-expand .navbar-nav .nav-link {
    padding: 0;
    margin: 0 1.3vw;
  }

  #RightLinks {
    position: absolute;
    top: 3vh;
    right: 2vw;
  }

  .NavLine {
    transform: translateY(-5px);
    border-bottom: 2px solid #859e30;
    width: 0px;
    height: 0px;
    transition: 1s;
  }
  .NavItem:hover > .NavTitle {
    color: #859e30;
  }
  .NavItem:hover > .NavLine {
    width: 65%;
  }
  navbar {
    z-index:10;
    width:100%;
    height: 70px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  @media (max-width:800px){
    .ArrowAudjust {
      transform: scale(0.6) translate(-22%, 30%);

      transition: 1s;

    }


    .wrapper {
      overflow: hidden;
    }
    .ServiceTitle {
      font-family: 'Bebas Neue', cursive;
      font-weight: 400;
      font-size: 19.2vw;
      color: #495d68;
      position: relative;
      z-index: 1;
      opacity: 100%;

    }
    .ServiceLineTitle {
      transform: translateY(-6vw);
      border-bottom: 4px solid #859e30;
      width: 35%;
      height: 0px;
      transition: 2s;
    }
    .ServiceTopContent {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 4vw;
      color: #495d68;
      padding-left: 13%;
      padding-right: 20%;
      transform: translateY(0%);
      opacity: 80%
    }
    .ReadMore {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 4vw;
      color: #495d68;
      padding-left: 13%;
      padding-right: 20%;
    }
    .ServiceIcon {
      position: absolute; opacity: 10%;
      transform: translate(-50%, -50%);
      height: initial; width: 80%;
      overflow: hidden; max-width: 100%;
      transition: 1s;
    }
    #IconTwo {
      position: absolute; opacity: 10%;
      transform: translate(-50%, -0%);
      height: initial; width: 80%;
      overflow: hidden; max-width: 100%;
      transition: 1s;
    }
    #IconOne {
      position: absolute; opacity: 10%;
      transform: translate(-110%, 40%);
      height: initial; width: 80%;
      overflow: hidden; max-width: 100%;
      transition: 1s;
    }
  }
</style>
