#include "pitches.h"

int sensorPin = A2; // Light Sensor connected to A2
int sensorValue = 0; // variable to store the value coming from the sensor
int buzzer = A5; // Piezo Buzzer connected to Pin A5
int extraground = 11; // setting another ground pin for easier wiring
int extrapositive = A3; // setting another positive pin for easier wiring
//Auxiliary variables
int i = 0;
/*
Array with all the notes, duration, and pause between notes.
First position is note, second is duration, third is pause.
*/
int music[19][3] =
{
  {NOTE_F4, 200, 200},  
  {NOTE_F4, 200, 200},
  {NOTE_F4, 200, 200},
  {NOTE_AS4, 1200, 1200},
  {NOTE_F5, 600, 600},
  {NOTE_DS5, 200, 200},
  {NOTE_D5, 200, 200},
  {NOTE_C5, 200, 200},
  {NOTE_AS5, 1200, 1200},
  {NOTE_F5, 600, 600},
  {NOTE_DS5, 200, 200},
  {NOTE_D5, 200, 200},
  {NOTE_C5, 200, 200},
  {NOTE_AS5, 1200, 1200},
  {NOTE_F5, 600, 600},
  {NOTE_DS5, 200, 200},
  {NOTE_D5, 200, 200},
  {NOTE_DS5, 200, 200},
  {NOTE_C5, 900, 1200}
};

//Function to help us test if sensor conditions are met
boolean isLightDetected(int sensorValue)
{
  return sensorValue < 10000 && sensorValue >= 40; //sets the sensitivity of the light sensor, the second value 40 can be increased to make it less sensitive to light or decreased to make it more sensitive. 0 would be no light at all
}

void setup() // run once, when the sketch starts
{
  Serial.begin(9600); // initialize the serial port
  pinMode(A2, INPUT); // sets analog pin A6 to be an input
  pinMode(A5, OUTPUT); //sets analog pin A5 to be an output
  pinMode(11, OUTPUT); //sets digital pin 11 to be an output
  pinMode(A3, OUTPUT); //sets analog pin A3 to be an output
}

void loop() // run over and over again
{
  digitalWrite(extraground, LOW); //set's the pin 11 as an extra ground pin for easier wiring
  digitalWrite(extrapositive, HIGH); //set's the pin A3 as an extra positive for easier wiring
  sensorValue = analogRead(sensorPin); // read the value from the sensor
  Serial.println(sensorValue); // send that value to the computer
  
  if(isLightDetected(sensorValue)) //Light Detected
  {
    //Initialize counter
    i = 0;
    //Now just play through (iterate) the array
    while(isLightDetected(sensorValue) && i < 19) //While light is detected AND i is below the total number of notes (19)
    {
      //Play a note
      tone(buzzer, music[i][0], music[i][1]);
      delay(music[i][2]);
      
      //Increment counter
      i++;
      
      //Read latest sensor data
      sensorValue = analogRead(sensorPin);
    }
    
    noTone(7);
  }
  else //No Light Detected
  {
  }
}
