
(function($) {    
  $.extend($.fn,
          {
    fadeIn: function(ms)
    {
      if(typeof(ms) === 'undefined') ms = 500;

      $(this).css(
        {
          display: 'block',
          opacity: 0
        }).animate({
        opacity: 1
      }, ms);

      return this;
    },

    fadeOut: function(ms)
    {
      if(typeof(ms) === 'undefined') ms = 500;

      $(this).css(
        {
          opacity: 1
        }).animate({
        opacity: 0
      }, ms, 'linear', function()
                  {
        $(this).css('display', 'none');
      });

      return this;
    }
  })
})(Zepto)

const creator = new URLSearchParams(window.location.search).get('creator')
const viewer = new URLSearchParams(window.location.search).get('viewer')

const debug = new URLSearchParams(window.location.search).get('debug')


const circle64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTE1VDE4OjU3OjUxKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA0LTE1VDE4OjU3OjUxKzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0xNVQxODo1Nzo1MSswMTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjN2ZlN2NjYy1iODgzLTdhNDUtOThiYy0yNDY3OWQyODk2MjAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4NTE1OTI1MS1mNGZlLWQxNDAtODNlNy05NjNhNjM1NDJmMDEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTYwNzM3MS00YzU1LTllNDItYjk5ZS1lYWNlMDFmMWM2Y2IiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NTYwNzM3MS00YzU1LTllNDItYjk5ZS1lYWNlMDFmMWM2Y2IiIHN0RXZ0OndoZW49IjIwMjEtMDQtMTVUMTg6NTc6NTErMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzdmZTdjY2MtYjg4My03YTQ1LTk4YmMtMjQ2NzlkMjg5NjIwIiBzdEV2dDp3aGVuPSIyMDIxLTA0LTE1VDE4OjU3OjUxKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+aEZZegAAAXtJREFUWIXNl01Kw0AYhp+2/mwroitXgroveATTI9RTSI+gZ1B6ix7AegTRvRRcifQPTJfGxeuiM2YaC5O0JuMLWYRJ5nlIMpPvq0kiZLYKXLsNtIEL4Bw4BppmLAZegUfgAbgHvnLNKsl3NCVdS5oof6bmnqZvfh/8UtKoADibkZmjsEBDUm8DcDY9M2cugYak/h/CbfqrJFYJ3JYAt7nzCXRKhNt0XGZN6T7QBF6AwwJLc51MgDMWS5e6M9CtAI5hdO2JfQI7wBtwUIEAwBQ4AhL7BKIK4RhWBOkriCqE27RdgVYAgZYrcBpA4ATSj/CTxYdYZRJgt+69rORYgXkA9twVGAYQGLoCTwEEnl2BQQCBASxvxe/AfkXwX1txAtxVBAfoGWaQ3/GUxcYXw/LvOAauSoZjGPHPWbZEMmVTWfGWZP+iKA1elmcbk/EG4LHWbEyyrdmNpFkB8Mzc423N3GXoi21OI9LmdM+MfZA2pwNzJHkmLSJQSr4BvSQwCTtLg5kAAAAASUVORK5CYII=";
const square64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTE1VDE4OjU4OjE4KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA0LTE1VDE4OjU4OjE4KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0xNVQxODo1ODoxOCswMTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplYmM1MzZkNC1mNTFiLWRjNDItOTRiZC04YjYwOWQ3NDAzNmQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0NWEzOWIxYi1jMmZhLThjNDItOGQxYy1mNDc5MTAxNGIxZjEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNTMxOGU1OC05OTliLWY0NDctODA1Ny01MzE4OGRjYTZiMWUiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozNTMxOGU1OC05OTliLWY0NDctODA1Ny01MzE4OGRjYTZiMWUiIHN0RXZ0OndoZW49IjIwMjEtMDQtMTVUMTg6NTg6MTgrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWJjNTM2ZDQtZjUxYi1kYzQyLTk0YmQtOGI2MDlkNzQwMzZkIiBzdEV2dDp3aGVuPSIyMDIxLTA0LTE1VDE4OjU4OjE4KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+HjIhmQAAADtJREFUWIXt17ERACAMAkDjuf/KsTGuQPM0lHxLdfdK5rxOKWqHhn8AAAAAAAAAAAAAAAAAAOYdVwpwAfjWBEJmmnP5AAAAAElFTkSuQmCC";
const star64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB4ElEQVRYhcWWu2sWURBHTx4mGB8kGjEoimhrJ6YSjY0PUOJbQWwsbPwPrLSwTWFnY5U2laCWoo2ghYWdoCCWotgIBuORK/eDddnXd9fsDgzs3js7v8PM7p0dUWlhU8CPNglG2zwM3Abm+gS4CFzoC2AXMA9c6gvgHDACHAV29gUQbCxz3RnANLCQuU9uQyrAGWBD5j7AzHYJkC/5eGobUgA2AicL1i93BXAC2FywfhzY3gVAWanDO7E4bLIwC04Bd2Mfi2wmt7YbmCyJ/VkzGzYBE/H6LXCNMIzUefW93dhv9YE6+XcQRoDgW9RH64zwRV3MaP4DMPAr6td1EH+h7snrFQEE36s+/0/Cv9R76liRVhlA8FH1jrraQvyzulChUQkw8MOJL+hjdbYuf9NfskPAmyaB0daAHcC3usCmB9HpIcQZZkQ3BUgZNI1GdJMW7AM+JgCsxh/WyjY0qcD5ir13wIeSvYlGlWvwFbwsecsfqlPqVnW5JOZJXf468Tl1LZf0u3q1IPZ63MtaOENm2gDcyiV8rR6oiN+vvso9c7MNwLOYJEywpcEEq/Fx9X48goM9TQWYjiUME+xsA+G8H1M/xRzbUgBulE2wITwIr1S1oSrZkVjOVPGsHywF6NWAP10TpwyQiq6rAAAAAElFTkSuQmCC";
const flower64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEnUlEQVRYhcWXe2jWVRjHP9pmuuksy5ZUZKWh1iATy6j+KzIkyyhXS4nQ6F72V0Ut0swILWzgpQuVkVqRGlKBrQuVFyZqrTJKuikz3TRzbs3m5r5xxvel09nv1TcK+sKP9z2X5znPee4HSYV+4yRdI6mfvwER3SBJ70hqlFT5D3hSyKYSSW/qL7RLOiypTdLDkvpL2hKtH5Q0pFABenN0VAG/Ac8BG4E+0E3XD5gNzAJGR1z6AtcXwLcbvbrVkI2BwDRgKjACKAY2AJ8BdwMDPA4MxgF1wHfASUArcDswD7gU+AKYnHlKhlqC+p6V1CLpd0mLPF5jFQfVPy5pr6S53vOopI1e+0HSnZKW6u+oKMQHSiU1RWSvSGr2/82SZkt6w3MTJG2V9KCkVvXEU8nMDVkCFCUKOQMYHI3bgDL/P9/fdqDGe9cAT9gnUgxKlZ1lgZSwTzI+JoPmdOARO2evPIcHtCSH/pq1KdXAgWTcmYd5wEVeXwdcnLF+AvAYUA4ctJP2RGSPwZJulbQtstvXkl7PsG8OL0i6Ls9ajaTOaPylpGck3SapKHXCMZJ2SOqQ9HRE1CWpOoN5hw9fJ6nWHh+8f5+kBZIekLT6CILXSRoWzg554HJgFVBq9bwP7HIsBxX/AtwDnGrbl9t0V3kuYAuwG6h13gg54j2gBOgAuoBhwBX2G8x/Yrj9nkiyNsf885L+iG47U9J2SfOPcKuA7yW9m2cthOy8ZG5TuMlmSxawGJjuG8SOGm4+xyk5h6XWWjtQ6bkyayILI63dGCOLTDwDGGv1DMgg3ml13u9x8Oq3XA92AOcC5ziHnGiTTkp4rAQmJHP1IYabgZkmOj6P9MG2d0R+kktEy1yIaqK9E10TYmwD9gHDk/mFuSiYbpuEMNmfYb+dtl+7x7skTZE0SdK1DrHY1q/5/yFJyyQtzuD5ci4KKoBNzoKHXGJDOa1IpF0LfAxUe/wp8LN9pNJZM9Df7MTUYH+4DJgS8QmRtcRrc4IAKxN7dVnl9S6pZVbfky7L0/KYCfvFGJvnE8/td4kear5NDtXy7stKWpgnbFpdDRe5FQtVcpYz49uROWSzvSpphs2Vw1z/3uTE1JKcsT5ooMRRcAlwNnBWxs0WAHf5f7PDcTlwJbDe6q/KiKCPfPtvbJZTorVQqKamHdFIe3uxN4Qo+RZotMfHaLKZAvP78phkqwvcaLd0uX1dDumatBpWOu3mUOvQafDNB0ZrZU5cN+ZzCOBzh2Vf0zY68VU7fffoiF5KbJTzj5/cdufQ4O5og6QRkuozfCi0aC9G492Sjj1aR5QvjQ5NMln4/5BNFJLYCnv9ycBeq31sEjHB6w+njFMBVptxFgLzD4E9Trm5TmiyW/PT7GjH2YeyUGpT5hWgznbL9fmxxFW23yhgSEJX6lZtuXmOB85M9jSlhwdkvQv6+ibh+9FZ60gPmOCo/d2i4fr/gb8g6C1uz4LXz+9BXcDzaUWeRNXpbuk8SQcy1q82fbGk4f/mbTjKj48YoVW7N9pzYbLnK0m9/6vHafgukLRK0lo/TMJLOd0z3mk4NLWZr6BMAf5XAH8CklhnAxftqrIAAAAASUVORK5CYII=";
const ring64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACHElEQVRYhcWXMU9UQRDHf1zBcUSiPZW5I6EiRloaQ6nVeeY+x30Lz68AvZhopxUhNrREpKLwYmVCqBRPDK/gb5bMkskKd/sO7t0kk7zs7sz/vzv7ZmfmJJEpD4DnwDPgCfAYeGimv4DvwCHwGfgEDLPcBgJjtCVpS9JQ+TI0m9Y4/6MmFyS9lnRRAjiVYNs3Xzfi3BaCJvDejvr6sIA9YB84AI6BHza3DKwC68AGsAnMOdsQmlfAt5wQPJV0kuzknaR2Rriits3Gy4n5HhmCELNTZzSQ1JNULwEetW62A+fvNL0X3qAh6dAt/iKpMwFwqh3zFeWrYf1HoJ/s/D7Ao3aSk+inBJqSCregd4/gUXvOfxFDESe3kgs3Scxz7oS/mNuRwJJLMpclb3tZbRuGDHMpDHYdq90pgkfddXjdmiWNKPu5D8MdxGNsBgJrbuCgAgIeY61maTfKcQUEPEYzvAUXwLwNLAJ/p0ygAZzbd1GbMthYCQTO3KLlCjA9xlkgMHADqxUQ8BiDQODIDaxXQMBjHNWsyIiyUQEBj7E3y1T8J2CHE/gN7BijUEZ1gfoUdl4337FUe3uFbcxaM3iOV/xzTMUFyZs45xc1rFyqoiRbvIkAsy5Ko1Zalt/WmLSAD8lTfZfGJCS7l7mNSdQFu5iFJpdiXGuWc5zhdwlFa0gcuXJuRefVrzZKy7bnL5L2/JHN/Uza849Z7TnwD3cWpkTclzuSAAAAAElFTkSuQmCC";

class Collider {

  constructor() {
    // control some internal vars here
    this.particleCount = 1000;
    this.hitBoxSize = 2;

    this.running = false;

    this.textCanvas = document.getElementById("container");
    this.textContext = this.textCanvas.getContext('2d');

    //this.cWidth = this.textCanvas.width;
    //this.cHeight = this.textCanvas.height;

    this.loadedFontFaces = [];
    this.fontFace = null;

    this.initParams();

    this.resize();

    this.hitTest = [];
    this.boxSize = this.hitBoxSize;
    this.av = 0;

    this.pause = 0;

    this.emitter1 = new Emitter(this);
    this.emitter1.i = 1;
    this.emitter1.edge = 'top';
    this.emitter1.velocity = 15;
    this.emitter1.distance = 0.3;

    this.emitter2 = new Emitter(this);
    this.emitter2.i = 2;
    this.emitter2.edge = 'top';
    this.emitter2.velocity = 15;
    this.emitter2.distance = 0.4;

    this.emitter3 = new Emitter(this);
    this.emitter3.i = 3;
    this.emitter3.edge = 'top';
    this.emitter3.velocity = 15;
    this.emitter3.distance = 0.6;

    this.emitter4 = new Emitter(this);
    this.emitter4.i = 4;
    this.emitter4.edge = 'top';
    this.emitter4.velocity = 15;
    this.emitter4.distance = 0.7;

    this.emitters = [
      this.emitter1,
      this.emitter2,
      this.emitter3,
      this.emitter4
    ];

    
    this.init();



  }


  /**
   * Do a full reset of all particles
   */
  hardReset() {
    if(this.running) {
      this.particles.destroy();
      this.initParticles();
    }
    
  }


  /**
   * Initialise all the internal parameters
   * @return {[type]} [description]
   */
  initParams() {
    // todo - make textSize proportional to screen size?? No? Yes? ARGH
    this.textSize = 150;
    this.textPosition = 0.5;
    this.textBorderWidth = 0;
    this.textBorderColor = '#2222AA';
    this.font = 'Monoton';
    this.particleSize = 1;
    this.particleShape = 'circle';
    //this.leftColor = '#880000';
    //this.rightColor = '#334455';

    this.pal1 = '#ffc610';
    this.pal2 = '#ff5600';
    this.pal3 = '#3333EE';
    this.pal4 = '#EE3333';
    this.cyclePalette = false;



    this.textColor = '#2222AA';
    //this.leftPosition = 50;
    //this.rightPosition = 50;
    //this.leftVelocity = 10;
    //this.rightVelocity = 10;
    this.gravity = 1;
    this.wind = -0.25;
    //this.turbulence = 1;
    this.airDrag = 0.1;


    this.textStickiness = 25;

    this.shadeParticles = true;
    // should particles be mixed up in the emitters?
    this.mixPalette = false;

  }

  /**
   * Tells all sprites to regenerate on falling off the screen
   */
  regenerateSprites() {
    this.sprites.forEach(sprite => {
      sprite.regenerate = true;
    });
  }


  reset() {
    this.initParams();
    this.rebuild();
  }


  shortHalt() {
    this.pause = 1;
  }

  resize() {

    this.cWidth = window.innerWidth;
    this.cHeight = window.innerHeight;

    if(debug) {
      this.cWidth = 1024;
      this.cHeight = 800;
    }

    this.textCanvas.width = this.cWidth;
    this.textCanvas.height = this.cHeight;


    if(this.particleRenderer) {
      this.particleRenderer.resize(this.cWidth, this.cHeight);
    }

    this.rebuild();

    this.repositionLabels();

  }

  /**
   * Returns the paletter color associated with the index i
   * *really* messy. Urgh. Stop it
   * @param  {[type]} i [description]
   * @return {[type]}   [description]
   */
  getPaletteColor(i) {

    /*if(this.cyclePalette) {
      i += this.tOffset;
      i = i % 4;
    }*/

    if(i == 1) {
      return this.pal1;
    } else if(i == 2) {
      return this.pal2;
    } else if(i == 3) {
      return this.pal3;
    } else if(i == 4) {
      return this.pal4;
    }
  }

  buildCollisionMatrix() {
    // build collision matrix
    let iData = this.textContext.getImageData(0, 0, this.cWidth, this.cHeight);
    let data = iData.data;
    for (var i = 0; i < this.cWidth / this.boxSize; i++) {
      this.hitTest[i] = [];
      for (var j = 0; j < this.cHeight / this.boxSize; j++) {
        //if above or below a specific row, safely assume there is no text here
        if (j > (this.cHeight / 2 + this.textSize * 1.5) / this.boxSize || j < (this.cHeight / 2 - this.textSize * 1.5) / this.boxSize) {
          this.hitTest[i][j] = 0;
          continue;
        }
        var pixel = 0;
        // get boxSize/2 pixels to the left, right, above and below this point
        for (var x = i * this.boxSize - this.boxSize; x < i * this.boxSize + this.boxSize; x++) {
          for (var y = j * this.boxSize - this.boxSize; y < j * this.boxSize + this.boxSize; y++) {
            if (x < 0 || y < 0 || x > this.cWidth || y > this.cHeight) {
              continue;
            }
            pixel += data[x * 4 + y * 4 * this.cWidth] + data[x * 4 + y * 4 * this.cWidth + 1] + data[x * 4 + y * 4 * this.cWidth + 2] + data[x * 4 + y * 4 * this.cWidth + 3];
          }
        }
        this.hitTest[i][j] = pixel;
      }
    }
  };

  initParticles() {
    // When using the highly optimised ParticleContainer, cannot apply tint operations
    this.particles = new PIXI.ParticleContainer(100000, {
      tint: true,
      position: true,
      autoResize: true
    });
    //this.particles = new PIXI.DisplayObjectContainer();

    // create a texture from an image path
    this.stage.addChild(this.particles);
    this.sprites = [];

    for (var i = 0; i < this.particleCount; i++) {
      let sprite = this.createSprite(i);
      this.sprites.push(sprite);
      this.particles.addChild(sprite);
    }
  }
  
  init() {

    document.getElementById('input').value = "Codepen.io";

    this.particleRenderer = PIXI.autoDetectRenderer({
      width: this.cWidth,
      height: this.cHeight,
      transparent: true,
    });
    //this.particleRenderer.backgroundColor = 0x888888;
    this.particleRenderer.view.style.position = "absolute";
    this.particleRenderer.view.style.top = "0px";
    this.particleRenderer.view.style.left = "0px";

    document.getElementById('pixi').appendChild(this.particleRenderer.view);
    this.stage = new PIXI.Container();

    this.setWeightedEmitters();

    this.initParticles();    
    this.rebuild();
    this.repositionLabels();

    requestAnimationFrame(this.animate.bind(this));

  }

  // thanks http://www.javascriptkit.com/javatutors/weighrandom2.shtml  
  setWeightedEmitters() {
    
    this.emitterTotalFlow = this.emitters.reduce(function(prev, cur) {
      return prev + cur.flow;
    }, 0);

    this.weightedEmitters = [];
    const emitterWeights = [];

    this.emitters.forEach(emitter => {
      emitterWeights.push(emitter.flow);
    });

    this.emitters.forEach(emitter => {
      // todo - oh please zero index emitter.i
      // Please.
      for (let i = 0; i < emitterWeights[emitter.i - 1]; i++) {
        this.weightedEmitters[this.weightedEmitters.length] = emitter.i - 1;
      }
    });



  }


  /**
   * //Add to Collider.Utils?
   * Apply luminance to a sprite. Used to get the subtle colour variation effect when choosing an emitter colour
   */

  lum(hex, lum) {

    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    var rgb = "#",
      c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }

    return rgb;
  }

  /**
   * [initSprite description]
   * @param  {[type]} sprite [description]
   * @return {[type]}        [description]
   */
  initSprite(sprite) {

    sprite.anchor.set(0.5);
    sprite.mass = 0.2 + Math.random() * 0.8;

    // Which emitter is this sprite going to come from?
  
    if(this.emitterTotalFlow == 0) {
      // can't init sprite while all emitters are turned off!
      return;
    }

    let emitter;
    if(!sprite.emitter || this.mixPalette) {
      let i = Math.floor(Math.random() * this.emitterTotalFlow);
      emitter = this.emitters[this.weightedEmitters[i]]; 
    } else {
      emitter = sprite.originalEmitter; // use the same emitter
    }
    
    emitter.emit(sprite);

    sprite.velocity.y = Math.random() * 4 + 1;

    sprite.inactive = 0;
    sprite.dropOut = false;

    if(sprite.regenerate) {

      const targetColor = this.getPaletteColor(sprite.emitter.i);
      let col;

      if(this.shadeParticles) {
        col = this.lum(targetColor, -0.33 + Math.random() * 0.33).replace('#', '0x');
      } else {
        col = targetColor.replace('#', '0x');
      }

      sprite.tint = col;

      let pngSizeFactor = 0.33;

      sprite.scale.set((sprite.scaleAdjustment * this.particleSize * sprite.mass + Math.random() * 0.5) * pngSizeFactor); // cater for later base64 data PNGs

      sprite.bornAt = performance.now();
      sprite.stillFor = 0;
      sprite.lastPos = {
        x: 0,
        y: 0
      };
      sprite.regenerate = false;

    }
  }


  /**
   * [i description]
   * @type {[type]}
   */
  createSprite(i = false)
  {
    let sprite;

    if(this.particleShape == 'square') {
      sprite = PIXI.Sprite.from(square64);
    } else if(this.particleShape == 'star') {
      sprite = PIXI.Sprite.from(star64);
    } else if(this.particleShape == 'flower') {
      sprite = PIXI.Sprite.from(flower64);
    } else if(this.particleShape == 'ring') {
      sprite = PIXI.Sprite.from(ring64);
    } else {
      sprite = PIXI.Sprite.from(circle64);
    }
    
    sprite.regenerate = true;
    sprite.specular = Math.random();
    sprite.velocity = {
      x: 0,
      y: 0
    }
    sprite.i = i;
    sprite.delay = 5000 * Math.random(); //feed sprites slowly
    return sprite;
  }




  //batchAdd();

  animate(t) {

    this.running = true;

    this.tOffset = Math.floor(t / 1000 * 0.25 % 4) + 1

    if(this.pause > 0) {
      this.pause--;
      requestAnimationFrame(this.animate.bind(this));
      return;
    }    

    this.particleRenderer.render(this.stage);



    for (var i in this.sprites) {
      var sprite = this.sprites[i];

      if (sprite.inactive || sprite.bornAt + sprite.delay > t) {
        sprite.alpha = 0;
        continue;
      } else {
        sprite.alpha = 1;
      }


      sprite.velocity.x *= (1 - this.airDrag * 0.25);


      let dx = sprite.velocity.x * sprite.mass;
      let dy = sprite.velocity.y * sprite.mass;

      sprite.position.x += dx;
      sprite.position.y += dy;

      // knock the sprites from the top of the letters once they've settled
      if (sprite.stillFor > this.textStickiness * (Math.random(0.4) + 0.8)) {
        sprite.dropOut = true;
      }

      let reverseFactor = 1;
      if(sprite.emitter) {
        reverseFactor = sprite.emitter.reverseGravity ? -1 : 1;
      }
      // 0.25 is a fudge factor to slow gravity down a bit. seems too strong
      sprite.velocity.y += ((this.gravity) * reverseFactor) * 0.25;

      //sprite.velocity.y += 0.3 * this.gravity;

      if(!sprite.stillFor) {
        sprite.position.x += this.wind;
      }

      var _x = Math.floor(sprite.position.x / this.boxSize);
      var _y = Math.floor(sprite.position.y / this.boxSize);

      if (_x >= 0 && _y >= 0 && _x < this.cWidth / this.boxSize && _y < this.cHeight / this.boxSize) {

        let hit;

        // Fixes an error sometimes where this isn't defined. Randomness
        if(this.hitTest[_x]) {
          hit = this.hitTest[_x][_y];
        } else {
          hit = 0;
        }

        if (hit > 0 && !sprite.dropOut) {
          sprite.velocity.y = 0 - sprite.velocity.y * (0.1 + 0.3 * Math.random());
          if (sprite.velocity.y < 0.2 && sprite.velocity.y > -0.2) {
            sprite.velocity.y = 0; //stabilise
          }
          sprite.stillFor++; // assuming that the sprite lies still after settling on a surface
          //sprite.velocity.x *= -1 + 2 * Math.random();
          sprite.velocity.x *= -1 + 0.25 * Math.random();
        } else {
          sprite.stillFor = 0;
        }
      } else {
        if(sprite.regenerate) {
          // Kill the sprite. Create a new one in its place. *no one will ever know*
          this.particles.removeChild(sprite);
          let newSprite = this.createSprite(sprite.i);
          this.initSprite(newSprite);
          this.particles.addChild(newSprite);
          this.sprites[i] = newSprite;          
        } else {
          // recycle the sprite if it falls off the edge
          this.initSprite(sprite);  
        }
        
      }

    }
    requestAnimationFrame(this.animate.bind(this));
  }

  //requestAnimationFrame(animate);

  /**
   * Rebuild the text and collision matrix
   * @return {[type]} [description]
   */
  rebuild() {
    
     if(!this.loadedFontFaces.includes(this.font)) {
      let fontFace = new FontFace(this.font, "url('https://assets.codepen.io/52084/"+this.font+".ttf')");
      fontFace.load().then(_ => {        
        document.fonts.add(fontFace);
        this.loadedFontFaces.push(fontFace);
        this.fontFace = fontFace;
        this.renderText()
      });
    } else {
      console.log("unused?");
      this.fontFace = fontFace;
      this.renderText();
    }   

    
  }


  renderText()
  {
    const input = document.getElementById('input');
    let text = input.value;    
    // bit of a ham-fisted way of adjusting size to always fit on screen
    let adjustmentFactor = this.cWidth / 1280;
    if (adjustmentFactor > 1) {
      adjustmentFactor = 1;
    }
    const adjustedTextSize = this.textSize * adjustmentFactor;
    this.textContext.font = adjustedTextSize + "px " + '"' + this.fontFace.family + '"';
    this.textContext.clearRect(0, 0, this.cWidth, this.cHeight);
    let textWidth = this.textContext.measureText(text).width;
    
    this.textContext.fillStyle = this.textColor;
    if(this.textBorderWidth > 0) {
      this.textContext.strokeStyle = this.textBorderColor;
      this.textContext.lineWidth = this.textBorderWidth;
      this.textContext.strokeText(text, (this.cWidth - textWidth) / 2, this.textPosition * this.cHeight);
    }
    this.textContext.fillText(text, (this.cWidth - textWidth) / 2, this.textPosition * this.cHeight);
    this.buildCollisionMatrix();
  }


  /**
   * Reposition the number labels for the cascade helper
   * @return {[type]} [description]
   */
  repositionLabels() {

    if(!this.emitters) {
      return;
    }
    
    

    this.emitters.forEach(emitter => {

      let origin = emitter.origin();
      let label = document.querySelectorAll('[data-cascade-label="'+emitter.i+'"]');
      let x = origin.x;
      let y = origin.y;

      if(emitter.edge == 'top') {
        x += 20;
        y += 40;
      }

      if(emitter.edge == 'right') {
        x -= 40;
        y += 20;
      }

      if(emitter.edge == 'bottom') {
        y -= 40;
        x -= 20;
      }

      if(emitter.edge == 'left') {
        x += 40;
        y += 20;
      }

      if(label) {
        console.log(x);
        label[0].style.left = x +"px";
        label[0].style.top = y + "px";
      }
    });
  }

  
}


/**
 * To do - get all the particle junk into this
 */
class Particle {

  constructor(collider) {
    // ??
  }

  step() {

  }

  animate() {

  }

}


/**
 * Emitter class - sets up particles with initial position/velocity
 */

class Emitter {

  constructor(collider) {
    this.collider = collider;
    this.distance = 0.5; // distance along the chosen edge
    this.edge = 'top'; // top, right, bottom, left
    this.velocity = 5; // speed at which particles are emitted
    this.reverseGravity = false;
    this.scaleAdjustment = 1;
    this.spread = 1; // 0 - 2
    this.flow = 100; // How many particles come out of this one? (0-1)
  }

  /**
   * Set the initial origin point
   * Pretty basic screen-space stuff, no translations happening here
   * @return {[type]} [description]
   */
  origin() {
    let x, y;
    if(this.edge == 'top') {
      x = this.collider.cWidth * this.distance;
      y = 0;
    } else if(this.edge == 'right') {
      x = this.collider.cWidth;
      y = this.collider.cHeight * this.distance;
    } else if(this.edge == 'bottom') {
      x = this.collider.cWidth * this.distance;
      y = this.collider.cHeight - 1;
    } else if(this.edge == 'left') {
      x = 0;
      y = this.collider.cHeight * this.distance;
    }

    return {x, y}
  }

  /**
   * Get the normal vector from the given edge
   * todo: maybe - this changes depending on this.angle?
   * @return {[type]} [description]
   */
  normal() {
    if(this.edge == 'top') {
      return { x: 0, y: -1 }
    } else if(this.edge == 'right') {
      return { x: -1, y: 0 }
    } else if(this.edge == 'bottom') {
      return { x: 0, y: 1 }
    } else if(this.edge == 'left') {
      return { x: 1, y: 0 }
    }
  }

  /**
   * Takes a sprite (particle?) and sets it up according to
   * emitter rules
   * @param  {[type]} sprite [description]
   * @return {[type]}        [description]
   */
  emit(sprite) {
    sprite.emitter = this;
    if(!sprite.originalEmitter) {
      sprite.originalEmitter = this;
    }
    sprite.x = this.origin().x;
    sprite.y = this.origin().y;
    sprite.scaleAdjustment = this.scaleAdjustment;
    // Set up the initial x and y velocities
    let normal = this.normal();
    let spread = (Math.random() * this.spread - (0.5 * this.spread)) * 0.75;
    let velocityFactor = (Math.random() * this.velocity + this.velocity / 2);

    if(this.edge == 'left' || this.edge == 'right') {
      sprite.velocity = {
        x: (normal.x * velocityFactor) + spread * velocityFactor,
        y: (normal.y * Math.random()) + spread * this.velocity
      }
    } else if (this.edge == 'top') {
      sprite.velocity = {
        x: (normal.x * Math.random()) + spread * this.velocity,
        y: (normal.y * velocityFactor)
      }
    } else if (this.edge == 'bottom') {
      sprite.velocity = {
        x: (normal.x * Math.random()) + spread * this.velocity,
        y: (normal.y * velocityFactor) + spread * velocityFactor
      }
    }
  }

}






/**
 * Initing
 */
let collider;

window.onresize =  _ => collider.resize();

/**
 * The save data structure
 */
const serial = [
  "collider.textSize",
  "collider.textPosition",
  "collider.textColor",
  "collider.textStickiness",
  "collider.textBorderWidth",
  "collider.textBorderColor",
  "collider.font",  
  "collider.particleSize",
  "collider.particleShape",
  "collider.shadeParticles",
  "collider.mixPalette",

  "globalOptions.text",
  // particle colors,
  "collider.pal1",
  "collider.pal2",
  "collider.pal3",
  "collider.pal4",
  "collider.cyclePalette",
  "collider.mixPalette",
  // emitters
  "collider.emitter1.velocity",
  "collider.emitter1.position",
  "collider.emitter1.edge",
  "collider.emitter1.distance",
  "collider.emitter1.spread",
  "collider.emitter1.flow",
  "collider.emitter1.scaleAdjustment",
  "collider.emitter1.reverseGravity",  

  "collider.emitter2.velocity",
  "collider.emitter2.position",
  "collider.emitter2.edge",
  "collider.emitter2.distance",
  "collider.emitter2.spread",
  "collider.emitter2.flow",
  "collider.emitter2.scaleAdjustment",
  "collider.emitter2.reverseGravity",  

  "collider.emitter3.velocity",
  "collider.emitter3.position",
  "collider.emitter3.edge",
  "collider.emitter3.distance",
  "collider.emitter3.spread",
  "collider.emitter3.flow",
  "collider.emitter3.scaleAdjustment",
  "collider.emitter3.reverseGravity",  

  "collider.emitter4.velocity",
  "collider.emitter4.position",
  "collider.emitter4.edge",
  "collider.emitter4.distance",
  "collider.emitter4.spread",
  "collider.emitter4.flow",
  "collider.emitter4.scaleAdjustment",
  "collider.emitter4.reverseGravity",  

  "collider.gravity",
  "collider.wind",
  "collider.airDrag",

  "backgroundOptions.bg1",
  "backgroundOptions.bg2",
  "backgroundOptions.bg3",
  "backgroundOptions.type",
  "backgroundOptions.stops",
  "backgroundOptions.radialCenterX",
  "backgroundOptions.radialCenterY",
  "backgroundOptions.linearAngle"
];

const presets = [
  'default',
  'captain_america',
  //'fire',
  //'ice',
  //'newyork',
  'irn_bru',
  'hulk_smash',
  'snow',
  'more_snow',
  'pixels',
  'spotlights',
  'moon',
  'roses',
  'midnight',
  'waterfall',
  'zalgo'
];


function colliderSerialize() {

  const output = {};
  serial.forEach(key => {
    // Oh no! It's eval. But it's ok, this is only ever run on the contents
    // of this array
    output[key] = eval(key);
  })
  console.log(JSON.stringify(output, null, 2));
  return JSON.stringify(output, null, 2);

}


function loadPreset(name) {

  // allow only letters and numbers in json name
  const cleanName = name.replace(/\W/g, '');

  fetch(`https://assets.codepen.io/52084/${cleanName}.json`, {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  })
    .then(response => {
      if(response.status != 200) {
        throw(`Error code ${response.status}`);
      }
      return response.json();
    }) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      colliderImport(response);
    })
    .catch(err => {
      // oopsie
      console.log(`Error fetching preset name ${cleanName}`);
      console.log(err);
    });
}

function colliderImport(data) {

  try {
    serial.forEach(key => {

      if(data[key] != undefined) {
        const value = data[key];
        if(key === 'globalOptions.text') {
          document.getElementById('input').value = value;
          globalOptions.text = value;
        }
        if(typeof value === "string") {
          eval(`${key} = '${value}';`);
        } else {
          // number, boolean or something else that doesn't need quotes
          eval(`${key} = ${value};`);
        }        
      }

    });

    setColliderBackground();
    collider.hardReset();
    collider.rebuild();    
    collider.repositionLabels();
  } catch(e) {
    console.log(e);
    console.log("Hmm.. something went wrong");
  }

  

}

const backgroundOptions = {
  bg1 : '#FFFFFF',
  bg2 : '#EEEEEE',
  bg3 : '#DDDDDD',
  type : 'linear',
  stops : "0,33,66",
  radialCenterX : 50,
  radialCenterY : 50,
  linearAngle : 180,
}


const globalOptions = {
  text: 'Cascades',
  textColor: 0x880000,
  backgroundColor: 0xFFFFFF,
  showEmitterLabels: false,
  importExport: function() {
    // open the import/export popup etc.
    
  }
}

function setColliderBackground() {
    
  let body = document.body

  let stops = backgroundOptions.stops.split(',');
  
  let stopFail = false;

  if(stops.length !== 3) {
    stopFail = true;
  } else {
    stops.forEach(stop => {
      stop = parseInt(stop);
      /*if(!Number.isInteger(stop)) {
        console.log('uh');
        stopFail = true;
      }*/
      if(stop > 100) {
        stopFail = true;
      }
      if(stop < 0) {
        stopFail = true
      }
    })
  }

  if(stopFail) {
    stops = [0, 33, 66];
  }

  let bg1 = backgroundOptions.bg1;
  let bg2 = backgroundOptions.bg2;
  let bg3 = backgroundOptions.bg3;

  let stop0 = stops[0];
  let stop1 = stops[1];
  let stop2 = stops[2];
  
  if(backgroundOptions.type == 'solid') {
    body.style.background = backgroundOptions.bg1;
  } else if(backgroundOptions.type == 'radial') {

    let x = backgroundOptions.radialCenterX;
    let y = backgroundOptions.radialCenterY;

    const bg = `radial-gradient(circle at ${x}% ${y}%, ${bg1} ${stop0}%,${bg2} ${stop1}%,${bg3} ${stop2}%,${bg3} 100%)`;      

    body.style.background = bg;

  } else if(backgroundOptions.type == 'linear') {

    let angle = backgroundOptions.linearAngle;

    const bg = `linear-gradient(${angle}deg, ${bg1} ${stop0}%,${bg2} ${stop1}%,${bg3} ${stop2}%,${bg3} ${stop2}%)`;      

    body.style.background = bg;

  }

}


let initialised = false;

/**
 * Initialise everything on page loaded
 * @param  {[type]} 'DOMContentLoaded' [description]
 * @param  {[type]} (event             [description]
 * @return {[type]}                    [description]
 */
window.addEventListener('DOMContentLoaded', (event) => {
  
  collider = new Collider;

  // Set up params
  let gui = new dat.GUI();
  gui.useLocalStorage = true;

  const controllers = [];

  var fonts = [
    'Abril Fatface',
    'Alegreya',
    'Archivo',
    'B612',
    'BioRhyme',
    'Bubblegum Sans',
    'Bungee Shade',
    'Cairo',
    'Cardo',
    'Concert One',
    'Cormorant',
    'Courgette',
    'Crimson Text',
    'Exo2',
    'Fira Sans',
    'Frank Ruhl Libre',
    'IBM Plex Serif',
    'Lato',
    'Merriweather',
    'Monoton',
    'Montserrat',
    'Noto Sans',
    'Old Standard TT',
    'Oxygen',
    'Poppins',
    'Press Start P2',
    'PT Sans',
    'PT Serif',
    'Rakkas',
    'Righteous',
    'Roboto',
    'Source Sans Pro',
    'Spectral',
    'Titillium Web',
    'Ubuntu',
    'Varela',
    'VT323',
    'Vollkorn',
    'Work Sans',
    'Yatra One'    
  ];

  var presetNames = [];

  var presetLoader = {
    preset: null
  };

  let presetController = gui.add(presetLoader, "preset", presets).name("Choose a preset");

  presetController.onChange(value => {
    loadPreset(value);
    hideIntro();
  });



  let textController = gui.add(globalOptions, "text").name("Cascade text")
  textController.listen();
  textController.onChange(value => {
    document.getElementById('input').value = value;
    collider.rebuild();
    hideIntro();
  });

  let emitterLabelController = gui.add(globalOptions, "showEmitterLabels").name("Toggle Labels");
  emitterLabelController.onChange(value => {
    let labels = document.querySelectorAll(".cascade-label");
    if(labels) {
      labels.forEach(label => {
        if(value) {
          label.style.visibility = "visible"; 
        } else {
          label.style.visibility = "hidden"; 
        }
      });
    }
    hideIntro();
  });

  let particleFolder = gui.addFolder("Particles");

  const particleShapes = ['square', 'circle', 'star', 'ring', 'flower'];

  controllers.push(particleFolder.add(collider, "particleCount", 50, 25000).name("Total particles"));
  controllers.push(particleFolder.add(collider, "particleSize", 0.1, 5).name("Size"));
  controllers.push(particleFolder.add(collider, "particleShape", particleShapes).name("Shape"));
  controllers.push(particleFolder.add(collider, "shadeParticles").name("Shade"));
  controllers.push(particleFolder.add(collider, "mixPalette").name("Mix"));

  let textFolder = gui.addFolder("Text");
  
  controllers.push(textFolder.addColor(collider, "textColor").name("Text Colour"));
  controllers.push(textFolder.add(collider, "textPosition", 0, 1).name("Text Position"));
  controllers.push(textFolder.add(collider, "textSize", 24, 350).name("Font Size"));
  controllers.push(textFolder.add(collider, "textBorderWidth", 0, 20).name("Border width").step(1));
  controllers.push(textFolder.addColor(collider, "textBorderColor").name("Border colour"));
  controllers.push(textFolder.add(collider, "font", fonts).name("Font"));
  controllers.push(textFolder.add(collider, "textStickiness", 0, 40).name("Stickiness"));

  let particlePaletteFolder = gui.addFolder("Particle palette");
  controllers.push(particlePaletteFolder.addColor(collider, "pal1").name("Colour #1"));
  controllers.push(particlePaletteFolder.addColor(collider, "pal2").name("Colour #2"));
  controllers.push(particlePaletteFolder.addColor(collider, "pal3").name("Colour #3"));
  controllers.push(particlePaletteFolder.addColor(collider, "pal4").name("Colour #4"));
  //controllers.push(particlePaletteFolder.add(collider, "cyclePalette").name("Cycle through palette"));


  let backgroundFolder = gui.addFolder("Background");

  const backgroundControllers = [];
 

  const bgTypes = ['solid', 'radial', 'linear'];
  backgroundControllers.push(backgroundFolder.add(backgroundOptions, 'type', bgTypes).name("Gradient"));
  backgroundControllers.push(backgroundFolder.add(backgroundOptions, 'stops').name("Stops"));
  backgroundControllers.push(backgroundFolder.add(backgroundOptions, 'radialCenterX', 0, 100).name("Horizontal (radial)"));
  backgroundControllers.push(backgroundFolder.add(backgroundOptions, 'radialCenterY', 0, 100).name("Vertical (radial)"));
  backgroundControllers.push(backgroundFolder.add(backgroundOptions, 'linearAngle', 0, 360).name("Angle (linear)"));
  backgroundControllers.push(backgroundFolder.addColor(backgroundOptions, 'bg1').name("Colour #1"));
  backgroundControllers.push(backgroundFolder.addColor(backgroundOptions, 'bg2').name("Colour #2"));
  backgroundControllers.push(backgroundFolder.addColor(backgroundOptions, 'bg3').name("Colour #3"));

  backgroundControllers.forEach(controller => {
    controller.listen();
    controller.onChange(_ => {
      setColliderBackground();
      hideIntro();
    });
  });

  // Initialise the background
  setColliderBackground();

  const edges = [
    'top', 'right', 'bottom', 'left'
  ]

  let cascades = gui.addFolder("Cascade Settings");


  

  let em1 = cascades.addFolder("Cascade 1");
  controllers.push(em1.add(collider.emitter1, "velocity", 5, 100).name("Velocity"));
  controllers.push(em1.add(collider.emitter1, "edge", edges).name("Edge"));
  controllers.push(em1.add(collider.emitter1, "distance", 0, 1).name("Position"));
  controllers.push(em1.add(collider.emitter1, "spread", 0, 4).name("Spread"));
  controllers.push(em1.add(collider.emitter1, "flow", 0, 100).name("Flow").step(1));  
  controllers.push(em1.add(collider.emitter1, "scaleAdjustment", 0.1, 2).name("Scale adjustment"));
  controllers.push(em1.add(collider.emitter1, "reverseGravity").name("Reverse Gravity"));

  let em2 = cascades.addFolder("Cascade 2");
  controllers.push(em2.add(collider.emitter2, "velocity", 5, 100).name("Velocity"));
  controllers.push(em2.add(collider.emitter2, "edge", edges).name("Edge"));
  controllers.push(em2.add(collider.emitter2, "distance", 0, 1).name("Position"));
  controllers.push(em2.add(collider.emitter2, "spread", 0, 4).name("Spread"));
  controllers.push(em2.add(collider.emitter2, "flow", 0, 100).name("Flow").step(1));  
  controllers.push(em2.add(collider.emitter2, "scaleAdjustment", 0.1, 2).name("Scale adjustment"));
  controllers.push(em2.add(collider.emitter2, "reverseGravity").name("Reverse Gravity"));

  let em3 = cascades.addFolder("Cascade 3");
  controllers.push(em3.add(collider.emitter3, "velocity", 5, 100).name("Velocity"));
  controllers.push(em3.add(collider.emitter3, "edge", edges).name("Edge"));
  controllers.push(em3.add(collider.emitter3, "distance", 0, 1).name("Position"));
  controllers.push(em3.add(collider.emitter3, "spread", 0, 4).name("Spread"));
  controllers.push(em3.add(collider.emitter3, "flow", 0, 100).name("Flow").step(1));  
  controllers.push(em3.add(collider.emitter3, "scaleAdjustment", 0.1, 2).name("Scale adjustment"));
  controllers.push(em3.add(collider.emitter3, "reverseGravity").name("Reverse Gravity"));
  
  let em4 = cascades.addFolder("Cascade 4");
  controllers.push(em4.add(collider.emitter4, "velocity", 5, 100).name("Velocity"));
  controllers.push(em4.add(collider.emitter4, "edge", edges).name("Edge"));
  controllers.push(em4.add(collider.emitter4, "distance", 0, 1).name("Position"));
  controllers.push(em4.add(collider.emitter4, "spread", 0, 4).name("Spread"));
  controllers.push(em4.add(collider.emitter4, "flow", 0, 100).name("Flow").step(1));  
  controllers.push(em4.add(collider.emitter4, "scaleAdjustment", 0.1, 2).name("Scale adjustment"));
  controllers.push(em4.add(collider.emitter4, "reverseGravity").name("Reverse Gravity"));

  let world = gui.addFolder("World Settings");
  controllers.push(world.add(collider, "gravity", -2.5, 2.5).name("Gravity"));
  controllers.push(world.add(collider, "wind", -10, 10).name("Wind"));
  //controllers.push(world.add(collider, "turbulence", -10, 10).name("Turbulence"));
  controllers.push(world.add(collider, "airDrag", 0, 1).name("Air Drag"));

  const hardResetParams = [
    'particleShape',
    'particleCount'
  ];

  const regenerateParams = [
    'pal1',
    'pal2',
    'pal3',
    'pal4',
    'particleSize',
    'shadeParticles',
    'scaleAdjustment'
  ];

  const rebuildParams = [
    'font',
    'textSize',
    'textColor',
    'textPosition',
    'textBorderColor',
    'textBorderWidth'
  ];  

  controllers.forEach(controller => {
    controller.listen();    
    controller.onChange(_ => {

      // Pause for a couple of ticks so things don't stutter
      collider.shortHalt();      
      hideIntro();

      // If changing the particle count, need to do a full restart
      if(hardResetParams.includes(controller.property)) {
        collider.hardReset();
        return;
      }

      if(controller.property === 'flow') {
        collider.setWeightedEmitters();
        collider.regenerateSprites();
        return;
      }

      if(controller.property === 'distance' || controller.property === 'edge') {
        // only emitters use distance
        collider.repositionLabels();
        return;
      }

      // Regenerate sprites (after they fall off the screen)
      if(regenerateParams.includes(controller.property)) {
        // Only regenerate if changing scale or color
        collider.regenerateSprites();
      }

      // Rebuild the text & collision matrix
      if(rebuildParams.includes(controller.property)) {
        collider.rebuild();
      }

    });
  });




  let importExportController = gui.add(globalOptions, "importExport").name("Load/save");

  $("#start-button").click(_ => {
    hideIntro();
    loadPreset($('#preset').val());
  }); 

  $('[data-help-button]').click(_ => {
    if($('#help-container').is(':visible')) {
      $('#help-container').fadeOut(250);
    } else {
      $('#help-container').fadeIn(250);
    }
  });

});

function hideIntro()
{
  if($('#intro-container').is(':visible')) {
    $('#intro-container').fadeOut(500);
  }
  if(!initialised) {    
    initialised = true;
    collider.particleCount = 2500;
  }
}






// Zepto Modules

// FX
;(function($, undefined){
  var prefix = '', eventPrefix,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
    testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty, transitionDuration, transitionTiming, transitionDelay,
    animationName, animationDuration, animationTiming, animationDelay,
    cssReset = {}

  function dasherize(str) { return str.replace(/([A-Z])/g, '-$1').toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

  if (testEl.style.transform === undefined) $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-'
      eventPrefix = event
      return false
    }
  })

  transform = prefix + 'transform'
  cssReset[transitionProperty = prefix + 'transition-property'] =
  cssReset[transitionDuration = prefix + 'transition-duration'] =
  cssReset[transitionDelay    = prefix + 'transition-delay'] =
  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
  cssReset[animationName      = prefix + 'animation-name'] =
  cssReset[animationDuration  = prefix + 'animation-duration'] =
  cssReset[animationDelay     = prefix + 'animation-delay'] =
  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }

  $.fn.animate = function(properties, duration, ease, callback, delay){
    if ($.isFunction(duration))
      callback = duration, ease = undefined, duration = undefined
    if ($.isFunction(ease))
      callback = ease, ease = undefined
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
    if (duration) duration = (typeof duration == 'number' ? duration :
                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
    if (delay) delay = parseFloat(delay) / 1000
    return this.anim(properties, duration, ease, callback, delay)
  }

  $.fn.anim = function(properties, duration, ease, callback, delay){
    var key, cssValues = {}, cssProperties, transforms = '',
        that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
        fired = false

    if (duration === undefined) duration = $.fx.speeds._default / 1000
    if (delay === undefined) delay = 0
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties
      cssValues[animationDuration] = duration + 's'
      cssValues[animationDelay] = delay + 's'
      cssValues[animationTiming] = (ease || 'linear')
      endEvent = $.fx.animationEnd
    } else {
      cssProperties = []
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ')
        cssValues[transitionDuration] = duration + 's'
        cssValues[transitionDelay] = delay + 's'
        cssValues[transitionTiming] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback)
      } else
        $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout

      fired = true
      $(this).css(cssReset)
      callback && callback.call(this)
    }
    if (duration > 0){
      this.bind(endEvent, wrappedCallback)
      // transitionEnd is not always firing on older Android phones
      // so make sure it gets fired
      setTimeout(function(){
        if (fired) return
        wrappedCallback.call(that)
      }, ((duration + delay) * 1000) + 25)
    }

    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft

    this.css(cssValues)

    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) })
    }, 0)

    return this
  }

  testEl = null
})(Zepto)


// SELECTOR
;(function($){
  var zepto = $.zepto, oldQsa = zepto.qsa, oldMatches = zepto.matches

  function visible(elem){
    elem = $(elem)
    return !!(elem.width() || elem.height()) && elem.css("display") !== "none"
  }

  // Implements a subset from:
  // http://api.jquery.com/category/selectors/jquery-selector-extensions/
  //
  // Each filter function receives the current index, all nodes in the
  // considered set, and a value if there were parentheses. The value
  // of `this` is the node currently being considered. The function returns the
  // resulting node(s), null, or undefined.
  //
  // Complex selectors are not supported:
  //   li:has(label:contains("foo")) + li:has(label:contains("bar"))
  //   ul.inner:first > li
  var filters = $.expr[':'] = {
    visible:  function(){ if (visible(this)) return this },
    hidden:   function(){ if (!visible(this)) return this },
    selected: function(){ if (this.selected) return this },
    checked:  function(){ if (this.checked) return this },
    parent:   function(){ return this.parentNode },
    first:    function(idx){ if (idx === 0) return this },
    last:     function(idx, nodes){ if (idx === nodes.length - 1) return this },
    eq:       function(idx, _, value){ if (idx === value) return this },
    contains: function(idx, _, text){ if ($(this).text().indexOf(text) > -1) return this },
    has:      function(idx, _, sel){ if (zepto.qsa(this, sel).length) return this }
  }

  var filterRe = new RegExp('(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*'),
      childRe  = /^\s*>/,
      classTag = 'Zepto' + (+new Date())

  function process(sel, fn) {
    // quote the hash in `a[href^=#]` expression
    sel = sel.replace(/=#\]/g, '="#"]')
    var filter, arg, match = filterRe.exec(sel)
    if (match && match[2] in filters) {
      filter = filters[match[2]], arg = match[3]
      sel = match[1]
      if (arg) {
        var num = Number(arg)
        if (isNaN(num)) arg = arg.replace(/^["']|["']$/g, '')
        else arg = num
      }
    }
    return fn(sel, filter, arg)
  }

  zepto.qsa = function(node, selector) {
    return process(selector, function(sel, filter, arg){
      try {
        var taggedParent
        if (!sel && filter) sel = '*'
        else if (childRe.test(sel))
          // support "> *" child queries by tagging the parent node with a
          // unique class and prepending that classname onto the selector
          taggedParent = $(node).addClass(classTag), sel = '.'+classTag+' '+sel

        var nodes = oldQsa(node, sel)
      } catch(e) {
        console.error('error performing selector: %o', selector)
        throw e
      } finally {
        if (taggedParent) taggedParent.removeClass(classTag)
      }
      return !filter ? nodes :
        zepto.uniq($.map(nodes, function(n, i){ return filter.call(n, i, nodes, arg) }))
    })
  }

  zepto.matches = function(node, selector){
    return process(selector, function(sel, filter, arg){
      return (!sel || oldMatches(node, sel)) &&
        (!filter || filter.call(node, null, arg) === node)
    })
  }
})(Zepto)
