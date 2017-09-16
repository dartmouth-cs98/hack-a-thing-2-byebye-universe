package com.example.alarmclockhack;

import android.app.Service;
import android.content.Intent;
import android.media.MediaPlayer;
import android.os.IBinder;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

public class RingtonePlayingService extends Service {

    MediaPlayer media_song;
    int startId;
    boolean isRunning;
    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }


    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Log.i("LocalService", "Received start id " + startId + ": " + intent);

        // fetch the extra string values
        String state = intent.getExtras().getString("extra");

        Log.e("Ringtone state: extra is", state);

        //this converts the extra strings from the intent
        //to start ID, values 0 or 1
        assert state != null;
        switch (state) {
            case "alarm on":
                startId = 1;
                break;
            case "alarm off":
                startId = 0;
                break;
            default:
                startId = 0;
                break;
        }


        //if else statements

        //if there is no music playing, and the user pressed "alarm on"
        //music should start playing
        if (!this.isRunning && startId == 1) {
            Log.e("there is no music,", "and you want start");
            //create an instance of the media player
            media_song = MediaPlayer.create(this, R.raw.lazysong);
            //start the ringtone
            media_song.start();

            this.isRunning = true;
            this.startId = 0;
        }
        //if there is music playing, and the user pressed "alarm off"
        //music should stop playing
        else if (this.isRunning && startId == 0) {
            Log.e("there is music,", " and you want end");

            //stop the ringtone
            media_song.stop();
            media_song.reset();

            this.isRunning = false;

        }
        //these are if the user presses random buttons
        //just to bug-proof the app
        else {
            this.isRunning = false;
            this.startId = 0;

        }


        return START_NOT_STICKY;
    }

    @Override
    public void onDestroy() {

        // Tell the user we stopped.
        Toast.makeText(this, "on Destroy called", Toast.LENGTH_SHORT).show();
    }



}

