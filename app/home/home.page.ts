import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  display = '0';              //initial or displayed numbers
  firstval: number = null;    //variable of result number or left operand
  operator: any = null;       //variable of calculation operation
  newcursor = false;          //checks if the operand in the left or right
  isc = false;                //var check if the clean button is "C" or "AC"
  isdot = false;              //var to check if the number contains dot/point
  inputForLog = [];           //an array that keeps track of what was entered for a calculation

  constructor() {}

  click(val: any) {
    switch (val) {
      case 'ac':
        this.display = '0';
        this.firstval = null;
        this.operator = null;
        this.newcursor = false;
        break;
      case 'c':
        this.display = '0';
        this.isc = false;
        break;
      case '+/-':
        if (Math.sign(parseInt(this.display, 0)) === 1) {
          const sign = -Math.abs(parseInt(this.display, 0));
          this.display = sign.toString();
        } else if (Math.sign(parseInt(this.display, 0)) === -1) {
          const sign = Math.abs(parseInt(this.display, 0));
          this.display = sign.toString();
        } else {
          this.display = this.display;
        }
        break;
      case '%':
        this.addpercent();
        break;
      case '÷':
        this.addoperator('÷');
        break;
      case 'x':
        this.addoperator('x');
        break;
      case '-':
        this.addoperator('-');
        break;
      case '+':
        this.addoperator('+');
        break;
      case '=':
        if (this.firstval !== null && this.operator !== null) {
          this.calclast();
        }
        this.operator = null;
        break;
      case '0':
        this.addnumber('0');
        break;
      case '1':
        this.addnumber('1');
        break;
      case '2':
        this.addnumber('2');
        break;
      case '3':
        this.addnumber('3');
        break;
      case '4':
        this.addnumber('4');
        break;
      case '5':
        this.addnumber('5');
        break;
      case '6':
        this.addnumber('6');
        break;
      case '7':
        this.addnumber('7');
        break;
      case '8':
        this.addnumber('8');
        break;
      case '9':
        this.addnumber('9');
        break;
      case '.':
        this.adddot();
        break;
    }
  }

  /******************** addDot *********************
            adds dot to displayed number
   ************************************************/
  adddot() {
     if (this.isdot === false) {
       this.isdot = true;
     } else {
       this.isdot = false;
     }
  }

  /******************** addnumber ********************
    This function adds an input number to the string
  ****************************************************/
  addnumber(nbr: string) {
    if (nbr === '0') {
      if (this.newcursor === true) {
        this.display = nbr;
        this.newcursor = false;
      } else if (this.display !== '0') {
        if (this.isdot === true) {
          this.display = `${this.display.toString()}.${nbr}`;
        } else {
          this.display = this.display.toString() + nbr;
        }
      } else if (this.display === '0') {
        if (this.isdot === true) {
          this.display = `${this.display.toString()}.${nbr}`;
        }
      }
    } else {
      if (this.newcursor === true) {
        this.display = nbr;
        this.newcursor = false;
      } else if (this.display === '0') {
        if (this.isdot === true) {
          if (this.display.toString().indexOf('.') > -1) {
            this.display = this.display.toString() + nbr;
          } else {
            this.display = `${this.display.toString()}.${nbr}`;
          }
        } else {
          this.display = nbr;
        }
      } else {
        if (this.isdot === true) {
          if (this.display.toString().indexOf('.') > -1) {
            this.display = this.display.toString() + nbr;
          } else {
            this.display = `${this.display.toString()}.${nbr}`;
          }
        } else {
          this.display = this.display.toString() + nbr;
        }
      }
    }
    this.isc = true;
  }
  
  /***************** addPercent ****************
            Adds a percent to number
   *********************************************/

  addpercent() {
    this.isdot = false;
    const dispval = parseInt(this.display, 0) / 100;
    this.display = dispval.toString();
  }

  /*************** addOperator ***************
           adds a calculation operator
   *******************************************/

  addoperator(op: string) {
    if (this.newcursor === false) {
      if (this.firstval === null) {
        if (this.isdot === true) {
          this.firstval = parseFloat(this.display);
        } else {
          this.firstval = parseInt(this.display, 0);
        }
      }
      if (this.firstval !== null && this.operator !== null) {
        this.calclast();
      }
    }
    this.isdot = false;
    this.operator = op;
    this.newcursor = true;
  }

  /**************** calcLast ****************
             Does the calculation
   *******************************************/
  calclast() {
    switch (this.operator) {
      case '÷':
        if (this.isdot === true) {
          this.firstval = (this.firstval / parseFloat(this.display));
        } else {
          this.firstval = (this.firstval / parseInt(this.display, 0));
        }
        break;
      case 'x':
        if (this.isdot === true) {
          this.firstval = (this.firstval * parseFloat(this.display));
        } else {
          this.firstval = (this.firstval * parseInt(this.display, 0));
        }
        break;
      case '-':
        if (this.isdot === true) {
          this.firstval = (this.firstval - parseFloat(this.display));
        } else {
          this.firstval = (this.firstval - parseInt(this.display, 0));
        }
        break;
      case '+':
        if (this.isdot === true) {
          this.firstval = (this.firstval + parseFloat(this.display));
        } else {
          this.firstval = (this.firstval + parseInt(this.display, 0));
        }
        break;
    }
    this.display = this.firstval.toString();
  }

}
