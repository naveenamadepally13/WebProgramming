package com.example.loginapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    Button login;
    EditText uid,pwd;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        login = (Button)findViewById(R.id.button2);
        uid = (EditText)findViewById(R.id.editText7);
        pwd = (EditText)findViewById(R.id.editText8);

        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(uid.getText().toString().equals("naveena") &&
                        pwd.getText().toString().equals("naveena")) {
                    Toast.makeText(getApplicationContext(),
                            "Logged In",Toast.LENGTH_SHORT).show();
                }else{
                    Toast.makeText(getApplicationContext(), "Invalid Credentials",Toast.LENGTH_SHORT).show();

                }
            }
        });
    }
}
