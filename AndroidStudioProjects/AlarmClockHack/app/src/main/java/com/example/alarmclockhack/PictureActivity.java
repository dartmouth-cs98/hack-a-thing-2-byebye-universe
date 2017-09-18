package com.example.alarmclockhack;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ImageView;

import java.util.Random;

public class PictureActivity extends AppCompatActivity {

    // Randomly select an image to show
    // Copied from https://www.youtube.com/watch?v=Pfee0wFD5M0
    ImageView imageView;
    Random r;
    int pickedImage = 0, lastPicked = 0;
    Integer[] images = {
        R.drawable.image_1,
        R.drawable.image_3,
        R.drawable.image_4,
        R.drawable.image_5,
        R.drawable.image_6,
        R.drawable.image_7,
        R.drawable.image_8
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_picture);

        imageView = (ImageView) findViewById(R.id.imageView);
        r = new Random();

        // pick random pic from array, don't repeat
        do{
            pickedImage = r.nextInt(images.length);
        } while (pickedImage == lastPicked);
            lastPicked = pickedImage;
            imageView.setImageResource(images[pickedImage]);

    }
}
