import React, { useState } from "react";
import { BiSolidHappyBeaming } from "react-icons/bi";

// components 
import {AlertRed} from '../components/alerts'; 
import Navbar from '../components/navbar'; 
import Footer from '../components/footer'; 
import '../stylesheet/percentage.css';



export default function Percentage() {
    const [error , setError] = useState(null);
    const [result , setResult] = useState(null); 
    //mark inputs
    const [schoolMark , setSchoolMark] = useState("");
    const [qudratMark , setQudratMark] = useState("");
    const [tahsileMark , setTahsileMark] = useState("");
// percen inputs
    const [schoolPercen , setSchoolPercen] = useState("");
    const [qudratPercen , setQudratPercen] = useState("");
    const [tahsilePercen , setTahsilePercen] = useState("");


    const Calculate = () => {
        const schoolMarkValue = schoolMark.trim() === "" ? 0 : parseFloat(schoolMark);
        const qudratMarkValue = qudratMark.trim() === "" ? 0 : parseFloat(qudratMark);
        const tahsileMarkValue = tahsileMark.trim() === "" ? 0 : parseFloat(tahsileMark);
      
        const schoolPercenValue = schoolPercen.trim() === "" ? 0 : parseFloat(schoolPercen);
        const qudratPercenValue = qudratPercen.trim() === "" ? 0 : parseFloat(qudratPercen);
        const tahsilePercenValue = tahsilePercen.trim() === "" ? 0 : parseFloat(tahsilePercen);

        if(schoolPercenValue + qudratPercenValue + tahsilePercenValue !== 100) {
            setError('مجموع النسب المئوية يجب ان يكون %100');
            setResult(null); 
            return; 
        }

        let total = 0; 
        if (!isNaN(schoolMarkValue) && !isNaN(schoolPercenValue)) {
            total += (schoolMarkValue * schoolPercenValue) / 100;
          }
          if (!isNaN(qudratMarkValue) && !isNaN(qudratPercenValue)) {
            total += (qudratMarkValue * qudratPercenValue) / 100;
          }
          if (!isNaN(tahsileMarkValue) && !isNaN(tahsilePercenValue)) {
            total += (tahsileMarkValue * tahsilePercenValue) / 100;
          }
          setResult(total.toFixed(3).replace(/\.?0*$/, ''));
          const rememberElement = document.querySelector('#remember > a');
          if (rememberElement) {
              rememberElement.textContent = `
              تذكر أن الأرزاق مكتوبة وأن الله لن يضيع لك تعب. \n
              ( دعواتكم  لي بالتوفيق )  
              `;
          } else {
              console.error('Element #remember > a not found!');
          }
        setError(null); 
        


    } 

    const handleInputChange = (value, setValue) => {
        let numberValue = parseFloat(value);
        if (value.trim() === "" || (numberValue >= 0 && numberValue <= 100)) {
            setValue(value);
            setError(null);
        } else {
            setError('لايمكن ادخال رقم اكبر من 100');
        }
    };

    return (
        <>
        <div className="hero_page hero_percen">
            <div className="percen_container">
                <div className="percen_text">
                    <h2>👌 احسب موزونتك بسهولة وبسرعة</h2>
                    <p >.حساب النسبة الموزونة لخريجي المرحلة الثانوية المكونة من الثانوي والقدرات والتحصيلي بكل سلاسة</p>
                    <p style={{fontWeight:'bold'}}>((اذا لم تحتج احد الخانات اتركه فارغاً))</p>
                </div>
                    <div className="percen_form">
                        <div className="percen_inputs" id="percen_input1">
                            <div className="percen_inputs_group">
                                <label htmlFor="school_mark">درجة الثانوي</label>
                                <input type="text" id="school_mark" value={schoolMark} maxLength={6} onChange={(e) => {
                                    handleInputChange(e.target.value , setSchoolMark)
                                }}/>
                            </div>
                            <div className="percen_inputs_group">
                                <label htmlFor="qudrat_mark">درجة القدرات</label>
                                <input type="text" id="qudrat_mark" value={qudratMark} maxLength={3} onChange={(e) => {
                                    handleInputChange(e.target.value , setQudratMark)
                                }}/>
                            </div>
                            <div className="percen_inputs_group">
                                <label htmlFor="tahsile_mark">درجة التحصيلي</label>
                                <input type="text" id="tahsile_mark" value={tahsileMark} maxLength={3} onChange={(e) => {
                                    handleInputChange(e.target.value , setTahsileMark)
                                }}/>
                            </div>
                        </div>
                        <div className="percen_inputs" id="percen_input2">
                        <div className="percen_inputs_group">
                                <label htmlFor="school_percen">معيار الثانوي</label>
                                <input type="text" id="school_percen" value={'%' + schoolPercen} maxLength={4} onChange={(e) => {
                                    handleInputChange(e.target.value.substring(1), setSchoolPercen)
                                }}/>
                            </div>
                            <div className="percen_inputs_group">
                                <label htmlFor="qudrat_percen">معيار القدرات</label>
                                <input type="text" id="qudrat_percen" value={'%' + qudratPercen} maxLength={4} onChange={(e) => {
                                    handleInputChange(e.target.value.substring(1) , setQudratPercen)
                                }}/>
                            </div>
                            <div className="percen_inputs_group">
                                <label htmlFor="tahsile_percen">معيار التحصيلي</label>
                                <input type="text" id="tahsile_percen" value={'%' + tahsilePercen} maxLength={4} onChange={(e) => {
                                    handleInputChange(e.target.value.substring(1) , setTahsilePercen)
                                }}/>
                            </div>
                        </div>
                    </div>
                  <div className="percen_submit">
                    <div className="percen_submit_button">
                        <button onClick={Calculate}>احسب</button>
                    </div>
                    {error !== null ? (
                        <AlertRed  alert_text={error} />
                    ) : (
                        <>
                          <div className="percen_submit_result">
                        <a>{result !== null ? '%' + result : <BiSolidHappyBeaming size={30} color="#494949" />}</a>
                    </div>
                    <div id="remember"><a></a></div>
                        </>
                )}
                  </div>
                    </div>
            </div>
            <Footer />
        </>
    )
}