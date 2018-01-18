// Motor A
const int motorPin1  = 9;  
const int motorPin2  = 10; 
// Motor B
const int motorPin3  = 6; 
const int motorPin4  = 5; 

// Defines ultrasonic pins numbers
const int trigPin1 = 2;
const int echoPin1 = 3;
const int trigPin2 = 7;
const int echoPin2 = 4;
const int trigPin3 = 11;
const int echoPin3 = 12;

int currentDirection = 0;

void setup() {
  //Serial.begin(9600); // open serial port, set the baud rate to 9600 bps

  //Set pins as outputs
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(motorPin3, OUTPUT);
  pinMode(motorPin4, OUTPUT);

  pinMode(trigPin1, OUTPUT); // Sets the trigPin on forward sensor as an Output
  pinMode(echoPin1, INPUT); // Sets the echoPin on forward sensor as an Input
  pinMode(trigPin2, OUTPUT); // Sets the trigPin on left sensor as an Output
  pinMode(echoPin2, INPUT); // Sets the echoPin on left sensor as an Input
  pinMode(trigPin3, OUTPUT); // Sets the trigPin on right sensor as an Output
  pinMode(echoPin3, INPUT); // Sets the echoPin on right sensor as an Input

  // Move forward
  forward();
  currentDirection = 1;

  // Seed the random number generator
  randomSeed(analogRead(0));
}

void loop() {
  // Find out where we can go!
  int val;
  int turn = 0;

  // Escape hatch
  val=analogRead(0);   //connect mic sensor to Analog 0
  if(val > 75){
    turn = 3;
  }
  else{
    int fDistance = getDistance(trigPin1, echoPin1); 
    int lDistance = getDistance(trigPin2, echoPin2); 
    int rDistance = getDistance(trigPin3, echoPin3);
  
    // Eliminate all numbers over 100 including all bad readings!
    int canGoForward = fDistance > 30 ? 1 : 0;
    int canGoLeft = lDistance > 30 && lDistance > rDistance;
    int canGoRight =  rDistance > 30 && rDistance > lDistance;
  
    // Make next turn
    turn = calculateTurn(canGoForward, canGoLeft, canGoRight);
  }
  // If nextDirection is different to the currentDirection, move
  if(turn != currentDirection){
    currentDirection = turn;
    changeDirection(turn);
  }
    
  delay(100);    
}

int calculateTurn(int F, int L, int R) {
  int direction = 0;
  
  if(F == 1){
    direction = 1;
  }
  else if(R == 1){
    direction = 2;
  }
  else if(L == 1){
    direction = 4;
  }
  else {
    direction = 3;
  }
  return direction;
}

void changeDirection(int d) {
  // let's pause for a bit
  delay(100);

  // Now change the direction based on whatever was passed in
  if(d == 1){
    forward();
  }
  else if(d == 2) {
    right();
  }
  else if(d == 3) {
    reverse();
  }
  else if(d == 4) {
    left();
  }
}

void forward() {
  doMove(255, 0, 255, 0);
}

void reverse() {
  doMove(0, 255, 0, 255);
  delay(random(500, 3000));
}

void halt() {
  doMove(0, 0, 0, 0);
}

void right() {
  doMove(0, 255, 255, 0);
  delay(random(500, 1500));   
}

void left() {  
  doMove(255, 0, 0, 255);
  delay(random(500, 1000));   
}

void doMove(int m1, int m2, int m3, int m4){
  analogWrite(motorPin1, m1);
  analogWrite(motorPin2, m2);
  analogWrite(motorPin3, m3);
  analogWrite(motorPin4, m4);  
}

int getDistance(int tPin, int ePin) {
  long duration;
  int distance;

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
  distance = duration*0.034/2;
  return distance;
}
