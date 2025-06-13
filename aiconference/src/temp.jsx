import React, { useEffect } from 'react';
import ProfileCard from './profilecard'; 
import NormalCardGrid from './normalcard';
import { colors } from './styles/commonStyles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';

// Import images from committee file
import TrusteeImage from './assets/trustee.jpg';
import PrakasanImage from './assets/Prakasan.png';
import GRKImage from './assets/GRK.jpg';
import VinothImage from './assets/Vinoth Kumar.png';
import IndhumathiImage from './assets/Indumathi.png';
import RekhaImage from './assets/Rekha.png';
import SathiyapriyaImage from './assets/Sathiyapriya.png';
import SenthilPrabhaImage from './assets/Senthilprabha.png';
import VijayanImage from './assets/vijayan K.jpg';
import FerranteImage from './assets/ferrante.jpg';
import BhamaImage from './assets/Bhama.png';
import PabloImage from './assets/pablo.jpg';
import GopikaRaniImage from './assets/Gopikarani.png';
import ThirumahalImage from './assets/Thirumahal.png';
import ShanmugamImage from './assets/Shanmugam.png';
import SivaranjiniImage from './assets/Sivaranjani.png';
import MuruganImage from './assets/Murugan.png';
import NirmalaImage from './assets/Nirmala.png';
import ACRImage from './assets/ACR.jpg';
import SangeethaImage from './assets/Sangeetha.png';
import PrakashImage from './assets/Prakash.jpg';
import MPrakashImage from './assets/M.Prakash.png';
import SureshImage from './assets/Suresh.png';
import VijayalakshmiImage from './assets/Vijiyalakashmi.png';
import SivarajImage from './assets/Sivaraj.png';
import MaruthamaniImage from './assets/Maruthamani.png';
import ArulJothiImage from './assets/Aruljothi.png';
import NatarajanImage from './assets/Natarajan.png';
import JayaprasathImage from './assets/Jayaprasanth.png';
import PrabhavathiImage from './assets/Prabavathi.png';
import SureshkumarImage from './assets/Sureshkumar.png';
import BrindhaImage from './assets/Brindha.png';
import KarthikVijaykumarImage from './assets/KarthikVijayakumar.png';
import DharaniImage from './assets/Dharani-DNVAoUd9.jpg';
import saisundara from './assets/SaiSundar.png';
import praveeen from './assets/Praveen.png';
import dhanalakshmi from './assets/Dhanalakshmi.png';
import surjith from './assets/Surjit.png';
import abirami from './assets/Abirami.png';
import kanchana from './assets/kanchana.jpg';
import sridevi from './assets/Sridevi.png';
import kalpana from './assets/Kalpana.png';
import niresh from './assets/NIresh.png';
import veerakumar from './assets/Veerakumar.jpg';
import thillairajan from './assets/Thillairajan.png';
import rajesh from './assets/Rajesh.png';
import kathirvel from './assets/Kathirvel.png';
import anisha from './assets/ANisha.png';
import barath from './assets/Barath.jpg';
import murugappan from './assets/Murugappan.jpg';
import sugunathan from './assets/sugananthan.jpg';
import pablo from './assets/pablo.jpg';
import shelly from './assets/shelly.png';
import sonali from './assets/sonali.jpg';
import badri from './assets/badri.jpg';
import vijaykumar from './assets/vijayakumar.jpg';
import thiyagarajan from './assets/thiyagarajan.jpg';
import siddarth from './assets/siddarth.jpg';
import jorg from './assets/jorg.png';
import amar from './assets/amar.jpg';
import srinivas from './assets/srinivas.png';
import Dr_GRK from './assets/Dr_GRK.jpg';
import arun from './assets/arun.jpg';
import mukundh from './assets/mukund.jpg';
import srikanth from './assets/srikanth.jpg';
import sudha_R from './assets/sudha_R.png';
import Dr_Rekha from './assets/Dr_Rekha.jpg';
import millie from './assets/mille.jpg';
import defaultImage from './assets/5856.jpg';

const Heading = styled.h2`
  color: #0D58A9;
  font-weight: bold;
  margin: 2rem 0 1rem 0;
  text-align: center;
  font-family: 'Montserrat, "Trebuchet MS", Helvetica, sans-serif';
`;

const MainHeading = styled.h1`
  color: #0D58A9;
  font-weight: bold;
  margin: 2rem 0 1rem 0;
  text-align: center;
  font-family: 'Montserrat, "Trebuchet MS", Helvetica, sans-serif';
  font-size: calc(1.8rem + 1vw);
  letter-spacing: 0.5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const TempComponent = () => {
  // Set background color when component mounts
  useEffect(() => {
    document.body.style.backgroundColor = '#FFFFFF';
    document.body.style.margin = '0';
    AOS.init({ duration: 1000, once: true });
    
    // Cleanup function to reset styles when component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div style={{
      padding: '70px 20px 40px 20px',
      color: '#000000',
      fontFamily: '"Inter", sans-serif',
      maxWidth: '1400px',
      margin: '0 auto',
      overflowX: 'hidden',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <MainHeading data-aos="fade-up">ORGANIZING COMMITTEE</MainHeading>

      <Heading data-aos="fade-up">PATRON</Heading>
      <div data-aos="fade-up" style={{ 
        marginBottom: '40px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(13, 88, 169, 0.1)'
      }}>
        <ProfileCard
          name="Shri L Gopalakrishnan"
          designation="Managing Trustee"
          organization="PSG & Sons' Charities"
          photoUrl={TrusteeImage}
        />
      </div>
      
      <Heading data-aos="fade-up">CO - PATRON</Heading>
      <div data-aos="fade-up" style={{ 
        marginBottom: '40px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(13, 88, 169, 0.1)'
      }}>
        <ProfileCard
          name="Dr K Prakasan"
          designation="Principal"    
          photoUrl={PrakasanImage}
        />
      </div>
      
      <Heading data-aos="fade-up">GENERAL CHAIRS</Heading>
      <div data-aos="fade-up" style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px',
        maxWidth: '1400px',
        margin: '0 auto 40px',
        padding: '30px',
        width: '100%',
        boxSizing: 'border-box',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(13, 88, 169, 0.1)'
      }}>
        <div style={{ 
          gridColumn: '1 / -1',
          display: 'flex',
          justifyContent: 'center',
          gap: '30px'
        }}>
          <ProfileCard
            name="Dr G R Karpagam"
            designation={
              <>
                Professor<br />Department of Computer Science and Engineering<br />Director, PSG - AI Consortium
              </>
            }     
            photoUrl={Dr_GRK}
          />
          <ProfileCard
            name="Dr B Vinoth Kumar"
            designation={
              <>
                Professor<br />Department of Information Technology<br />IT Infrastructure and Networking -Technical Lead, PSG - AI Consortium
              </>
            }
            photoUrl={VinothImage}
          />
        </div>
      </div>
      
      <Heading data-aos="fade-up">ORGANIZING CHAIRS</Heading>
      <div data-aos="fade-up" style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px',
        maxWidth: '1400px',
        margin: '0 auto 40px',
        padding: '30px',
        width: '100%',
        boxSizing: 'border-box',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(13, 88, 169, 0.1)'
      }}>
        <div style={{ 
          gridColumn: '1 / -1',
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap'
        }}>
          <ProfileCard
            name="Dr D Indumathi"
            designation="Associate Professor"
            organization="Department of Computer Science and Engineering"
            photoUrl={IndhumathiImage}
          />
          <ProfileCard
            name="Dr R Rekha"
            designation="Associate Professor"
            organization="Department of Information Technology"
            photoUrl={Dr_Rekha}
          />
          <ProfileCard
            name="Dr K Sathiyapriya"
            designation="Associate Professor"
            organization="Department of Computer Science and Engineering"
            photoUrl={SathiyapriyaImage}
          />
          <ProfileCard
            name="Dr R Senthil Prabha"
            designation="Associate Professor"
            organization="Department of Information Technology"
            photoUrl={SenthilPrabhaImage}
          />
        </div>
      </div>
      
      <Heading data-aos="fade-up">ORGANIZING CO - CHAIR</Heading>
      <div data-aos="fade-up" style={{ 
        marginBottom: '40px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(13, 88, 169, 0.1)'
      }}>
        <ProfileCard
          name="Dr Ferrante Neri"
          designation="Professor of Machine Learning and Artificial Intelligence"
          organization="University of Surrey, United Kingdom"
          photoUrl={FerranteImage}
        />
      </div>
      
      <Heading data-aos="fade-up">SCIENTIFIC COMMITTEE CHAIRS</Heading>
      <div data-aos="fade-up" style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(250px, 1fr))',
        gap: '30px',
        maxWidth: '1400px',
        margin: '0 auto 40px',
        padding: '30px',
        width: '100%',
        boxSizing: 'border-box',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(13, 88, 169, 0.1)'
      }}>
        <div data-aos="fade-up" style={{ 
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          minWidth: '0'
        }}>
          <ProfileCard
            name="Dr Pablo Moscato"
            designation="Professor of Data Science"
            organization="University of Newcastle, Australia"
            photoUrl={PabloImage}
          />
        </div>
        
        <div data-aos="fade-up" style={{ 
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          minWidth: '0'
        }}>
          <ProfileCard
            name="Dr Sudha Ramalingam"
            designation={
              <>
                Professor & Head, Community Medicine<br />
                Director - Research and Innovation
              </>
            }
            organization="PSG Institute of Medical Science and Research, India"
            photoUrl={sudha_R}
          />
        </div>
        
        <div data-aos="fade-up" style={{ 
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          minWidth: '0'
        }}>
          <ProfileCard
            name="Dr Millie Pant"
            designation="Professor & Head"
            organization="Department of Applied Mathematics and Scientific Computing, Indian Institute of Technology Roorke, India"
            photoUrl={millie}
          />
        </div>
        
        <div data-aos="fade-up" style={{ 
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          minWidth: '0'
        }}>
          <ProfileCard
            name="Dr B Malar"
            designation="Professor"
            organization="Department of Applied Mathematics and Computational Sciences, PSG College of Technology, India"
            photoUrl={defaultImage}
          />
        </div>
      </div>

      <div data-aos="fade-up" style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(250px, 1fr))',
        gap: '30px',
        maxWidth: '1400px',
        margin: '0 auto 40px',
        padding: '30px',
        width: '100%',
        boxSizing: 'border-box',
        justifyContent: 'center',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(13, 88, 169, 0.1)'
      }}>
        <div data-aos="fade-up" style={{ 
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          minWidth: '0',
          gridColumn: '2 / span 1'
        }}>
          <ProfileCard
            name="Dr Arun Rajkumar"
            designation="Assistant Professor"
            organization="Department of Computer Science and Engineering, Indian Institute of Technology Madras, India"
            photoUrl={arun}
          />
        </div>
        
        <div data-aos="fade-up" style={{ 
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          minWidth: '0',
          gridColumn: '3 / span 1'
        }}>
          <ProfileCard
            name="Dr B Sangeetha"
            designation="Assistant Professor(Sl.Gr)"
            organization="Department of Information Technology, PSG College of Technology"
            photoUrl={SangeethaImage}
          />
        </div>
      </div>
      
      <MainHeading data-aos="fade-up">ADVISORY COMMITTEE</MainHeading>
      <div style={{ 
        marginBottom: '40px', 
        background: 'linear-gradient(145deg, #0d58a9 0%, #0a4a8f 100%)',
        padding: '40px 20px',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        boxShadow: '0 4px 15px rgba(13, 88, 169, 0.2)'
      }}>

         <Heading style={{ 
          textAlign: 'center', 
          marginBottom: '5px',
          fontSize: 'calc(1.2rem + 0.5vw)',
          color: '#D9A353',
          fontFamily: '"Playfair Display", serif',
          fontWeight: '600',
          letterSpacing: '0.5px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
        }}>INTERNATIONAL ADVISORY COMMITTEE</Heading>
        
        <div style={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          textAlign:'left',
          border: '1px solid rgba(13, 88, 169, 0.2)'
        }}>
          <table style={{
            width: '100%',
            minWidth: '600px',
            borderCollapse: 'collapse',
            color: '#ffffff'
          }}>
            <tbody>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Chunting Chris Mi
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  San Diego State University, USA
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Dong-Soo Kwon
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  KAIST, South Korea
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Vikram Kapila
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  NYU Tandon School of Engineering, USA
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Xiao-Zhi Gao
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  University of Eastern Finland, Finland
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Yuval Shavitt
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Tel Aviv University, Israel
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Richard Voyles
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Purdue University, USA
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Jai Govind Singh
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Asian Institute of Technology, Bangkok
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Vigna Kumaran Ramachandaramurthy
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Universiti Tenaga Nasional, Malaysia
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Ahmed Zobaa
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Brunel University, London, UK
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Tan Wei Hong
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Universiti Malaysia Perlis, Malaysia
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Barath Narayanan
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  University of Dayton Research Institute, USA
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr M Murugappan
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Kuwait College of Science and Technology , Kuwait
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Ms Abinaya Nagarajan
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  JP Morgan Chase & Co., Singapore
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px' }}>
                  Dr P N Suganthan
                </td>
                <td style={{ padding: '12px 20px' }}>
                  Qatar University , Qatar
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Heading style={{ 
          textAlign: 'center', 
          marginBottom: '3px',
          fontSize: 'calc(1.2rem + 0.5vw)',
          color: '#D9A353',
          fontFamily: '"Playfair Display", serif',
          fontWeight: '600',
          letterSpacing: '0.5px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
        }}>NATIONAL ADVISORY COMMITTEE</Heading>
        
        <div style={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          textAlign:'left',
          border: '1px solid rgba(13, 88, 169, 0.2)'
        }}>
          <table style={{
            width: '100%',
            minWidth: '600px',
            borderCollapse: 'collapse',
            color: '#ffffff'
          }}>
            <tbody>
              <tr>
                <td style={{ 
                  padding: '12px 20px', 
                  borderBottom: '1px solid rgba(13, 88, 169, 0.2)',
                  transition: 'all 0.3s ease'
                }}>
                  Dr Albert Sunny
                </td>
                <td style={{ 
                  padding: '12px 20px', 
                  borderBottom: '1px solid rgba(13, 88, 169, 0.2)',
                  transition: 'all 0.3s ease'
                }}>
                  Indian Institute of Science Bangalore, Karnataka
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Badri Narayan Subudhi
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Indian Institute of Technology Jammu , Jammu & Kashmir
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Vineeth N Balasubramaniam
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Indian Institute of Technology Hyderabad 
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Siva Kumar K
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Indian Institute of Technology Hyderabad 
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Sonali Agarwal
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Indian Institute of Information Technology Allahabad
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Vijayakumar Krishnasamy
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Indian Institute of Information Technology Design and Manufacturing Kancheepuram
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr R Dhanalakshmi
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Indian Institute of Information Technology, Trichy
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Shelly Sachdeva
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  National Institute of Technology, Delhi
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Fazal A Talukdar
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  National Institute of Technology Silchar, Assam
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Santhi Thilagam
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  National Institute of Technology  Karnataka ,Surathkal
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Surendran B
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  National Institute of Technology Puducherry, Karaikal
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr S Nickolas
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  National Institute of Technology Trichy 
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr V Govindasamy
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Pondicherry Engineering College, Puducherry
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr Amit Konar
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Jadavpur University, Kolkata
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Dr C S Saravana Kumar
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Bosch Global Software Technologies Private Limited, Coimbatore
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Mr Siddarth Narayanan
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Office of Principal Scientific Adviser, Government of India
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Ms Sudha Velusamy
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Samsung R&D Institute, Bangalore
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Mr Mukund Bhoovaraghavan
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Microsoft, Hyderabad
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Mr Thiyagarajan Subramani
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Continental Technical Center, India
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Mr Srikanth Subramaniam
                </td>
                <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(13, 88, 169, 0.2)' }}>
                  Salesforce , Banglore
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
       
      </div>
      
      <style jsx>{`
        @media screen and (max-width: 768px) {
          h1 {
            font-size: 1.8rem;
          }
          h2 {
            font-size: 1.5rem;
          }
          h4 {
            font-size: 1rem !important;
          }
        }
        
        @media screen and (max-width: 480px) {
          h1 {
            font-size: 1.6rem;
          }
          h2 {
            font-size: 1.3rem;
          }
          h4 {
            font-size: 0.9rem !important;
          }
        }
        
        @media screen and (max-width: 1200px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media screen and (max-width: 900px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media screen and (max-width: 600px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default TempComponent;

