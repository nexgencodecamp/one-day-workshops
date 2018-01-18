/*
* Ultrasonic Sensor HC-SR04 and Arduino Tutorial
*
* Crated by Dejan Nedelkovski,
* www.HowToMechatronics.com
*
*/
// defines pins numbers
const int trigPin = 12;
const int echoPin = 11;

// defines variables
long duration;
int distance;
void setup() {
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input
  Serial.begin(9600); // Starts the serial communication
}
void loop() {

  // Calculate distance and print it to the serial monitor
  int distance = getDistance(trigPin, echoPin);
  Serial.print("Distance: ");
  Serial.println(distance);

  // Pause before looping again
}

int getDistance(int tPin, int ePin) {
  // Clears the trigPin
  digitalWrite(tPin, LOW);
  delayMicroseconds(2);

  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(tPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(tPin, LOW);
  
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(ePin, HIGH);
  
  // Calculating the distance
  distance= duration*0.034/2;
  return distance;
}

