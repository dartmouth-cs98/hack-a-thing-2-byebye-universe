// app adapted from: https://www.youtube.com/watch?v=xbBlzOblD10&list=PL4uut9QecF3DLAacEoTctzeqTyvgzqYwA&index=1

package com.example.alarmclockhack;

import android.annotation.TargetApi;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.icu.util.Calendar;
import android.os.Build;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.TimePicker;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {
    AlarmManager alarm_manager;
    TimePicker alarm_timePicker;
    TextView update_text;
    Context context;
    PendingIntent pending_intent;

    @android.support.annotation.RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        this.context = this;
        //initialize alarm manager
        alarm_manager = (AlarmManager) getSystemService(ALARM_SERVICE);
        //initialize timepicker
        alarm_timePicker = (TimePicker) findViewById(R.id.timePicker);
        //initialize text update box
        update_text = (TextView) findViewById(R.id.update_text);

        //create instance of calendar
        final Calendar calendar = Calendar.getInstance();

        //create an intent to the Alarm Receiver class
        final Intent my_intent = new Intent(this.context, Alarm_Receiver.class);

        //initialize start alarm
        Button alarm_on = (Button) findViewById(R.id.alarm_on);


        //create onClick listener to start the alarm
        alarm_on.setOnClickListener (new View.OnClickListener() {
            public void onClick(View v){

                //setting calendar instance with the hr and min picked
                //on the time picker
                calendar.set(Calendar.HOUR_OF_DAY, alarm_timePicker.getHour());
                calendar.set(Calendar.MINUTE, alarm_timePicker.getMinute());

                //get the int values of the hour and minute
                int hour = alarm_timePicker.getHour();
                int minute = alarm_timePicker.getMinute();

                //convert the int values to strings
                String hour_string = String.valueOf(hour);
                String minute_string = String.valueOf(minute);

                //convert 24-hour time to 12-hour time
                if (hour > 12) {
                    hour_string = String.valueOf(hour - 12);
                }
                if(minute < 10) {
                    minute_string = "0" + String.valueOf(minute);
                }

                //method that changes the update text text box
                set_alarm_text("Alarm set to: " + hour_string + ":" + minute_string);

                //put in extra string into my_intent
                //tells the clock that "alarm on" button was pressed
                my_intent.putExtra("extra", "alarm on");

                //create a pending intent that delays the intent
                //until the specified calendar time
                pending_intent = PendingIntent.getBroadcast(MainActivity.this, 0,
                        my_intent,PendingIntent.FLAG_UPDATE_CURRENT);

                //set the alarm manager
                alarm_manager.set(AlarmManager.RTC_WAKEUP,calendar.getTimeInMillis(), pending_intent);
            }
        });

        //initialize end alarm
        Button alarm_off = (Button) findViewById(R.id.alarm_off);

        // create onClick listener to turn off alarm
        alarm_off.setOnClickListener (new View.OnClickListener() {
            public void onClick(View v){
                // only show picture if alarm was on
                boolean showPic = false;
                if (!update_text.getText().toString().equals("Alarm off") && !update_text.getText().toString().equals("Set alarm?")){
                    Log.d("alarm was on", "in if");
                    showPic = true;
                }

                set_alarm_text("Alarm off");

                //cancel the alarm if pending intent exists
                if (pending_intent != null){
                    alarm_manager.cancel(pending_intent);
                }

                //put extra string into my_intent
                //tell the clcok that alarm_off button was pressed
                my_intent.putExtra("extra", "alarm off");

                //stop the ringtone
                //sends broadcast to alarm receiver to stop ringtone service
                sendBroadcast(my_intent);

                // open new PictureActivity to see picture
                if (showPic == true){
                    //Log.d("showPic should be true", String.valueOf(showPic));
                    Intent see_picture=new Intent(MainActivity.this,PictureActivity.class);
                    startActivity(see_picture);
                    showPic = false; // don't show pic again unless there was an alarm
                    //Log.d("showPic should be false", String.valueOf(showPic));
                }

            }
        });


    }

    private void set_alarm_text(String output) {
        update_text.setText(output);

    }
}
