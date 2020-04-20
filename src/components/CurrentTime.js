import React from 'react';
import './CurrentTime.css'

class CurrentTime extends React.Component {

    
    constructor(props){
        super(props);
        this.state = {date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), day: new Date().getDate(), year: new Date().getFullYear(),
        hour: new Date().getHours(), minute: new Date().getMinutes(), second: new Date().getSeconds()};
    }


    async componentDidMount() {
        const city_1 = this.props.city
        function showWeek(objD) {
            var vt = new  Date();
            vt = objD ;
            var str;
            var d = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' );
            if (city_1 === 'Sydney'){
                if (vt.getHours() > 21) {
                    if (vt.getDay() == 6) {
                        str =  " " + d[0];
                    } else {
                        str =  " " + d[vt.getDay() + 1];
                    }
                } else {
                    str =  " " + d[vt.getDay()]; 
                }
            }
            if (city_1 === 'New York'){
                if (vt.getHours() < 12) {
                    if (vt.getDay() === 0) {
                        str =  " " + d[6];
                    } else {
                        str =  " " + d[vt.getDay() - 1];
                    }
                } else {
                    str =  " " + d[vt.getDay()]; 
                }
            }
            if (city_1 === 'London'){
                if (vt.getHours() < 7) {
                    if (vt.getDay() == 0) {
                        str =  " " + d[6];
                    } else {
                        str =  " " + d[vt.getDay() - 1];
                    }
                } else {
                    str =  " " + d[vt.getDay()]; 
                }
            }
            if (city_1 === 'Seoul'){
                if (vt.getHours() > 22) {
                    if (vt.getDay() == 6) {
                        str =  " " + d[0];
                    } else {
                        str =  " " + d[vt.getDay() + 1];
                    }
                } else {
                    str =  " " + d[vt.getDay()]; 
                }
            }
            return (str);
        };
        function showHour(objD) {
            var vt = new  Date();
            vt = objD ;
            var str;
            if (city_1 === 'Sydney'){
                if (vt.getHours() > 21) {
                    str =  vt.getHours() - 22; 
                } else {
                    str =  vt.getHours() + 2; 
                }
            }
            if (city_1 === 'New York'){
                if (vt.getHours() > 12) {
                    str =  vt.getHours() - 12; 
                } else {
                    str =  vt.getHours() + 12; 
                }
            }
            if (city_1 === 'London'){
                if (vt.getHours() > 7) {
                    str =  vt.getHours() - 7; 
                } else {
                    str =  vt.getHours() + 17; 
                }
            }
            if (city_1 === 'Seoul'){
                if (vt.getHours() > 22) {
                    str =  vt.getHours() - 23; 
                } else {
                    str =  vt.getHours() + 1; 
                }
            }
            if (str < 10) {
                str = '0' + str
            }
            return (str); 
        }
        function shouMinutes(objt) {
            if (objt < 10) {
                var str = '0' + objt
                return str
            }
            return objt
        }
        function showMonth(objD) {
            var vt = new  Date();
            vt = objD ;
            var str;
            var d = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug' , 'Sep', 'Oct', "Nov", "Dec");
            str =  " " + d[vt.getMonth()]; 
            return (str);
        }
        function sec(objt) {
            if (objt < 10) {
                var str = '0' + objt
                return str
            }
            return objt
        }
        this.timer = setInterval(() => {
            this.setState({date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), day: new Date().getDate(), year: new Date().getFullYear(),
                weekday: showWeek(new Date), month: showMonth(new Date), hour: showHour(new Date), minute: shouMinutes(new Date().getMinutes()), second: sec(new Date().getSeconds())});
        }, 1000);
    }


    componentWillUnmount(){
        clearInterval(this.timer)
    }


    render() {
        return (
            <div className='d_and_t'>
                <div className='city_name'>{this.props.city}</div>
                <div className='dates'><p className='p1'>{this.state.weekday} {this.state.month} {this.state.day} {this.state.year}</p></div>
                <div className='times'><p className='p2'><span className='s1'>{this.state.hour}</span><span className='c11'>:</span><span className='s2'>{this.state.minute}</span><span className='c12'>:</span><span className='s3'>{this.state.second}</span></p></div>
            </div>
            
        )
    }
}
export default CurrentTime