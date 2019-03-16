//
//  ViewController.swift
//  Guild
//
//  Created by Juan Calle on 3/8/19.
//  Copyright © 2019 JCalle. All rights reserved.
//
import UIKit
import Alamofire

class ViewController: UIViewController {

    let URL = "http://157.230.66.35/php/login.php"
    
    @IBOutlet weak var email: UITextField!
    @IBOutlet weak var password: UITextField!
    
    
    @IBAction func SignIn(_ sender: UIButton) {
        
        let loginRequest: Parameters = [
            "username" : email.text!,
            "password" : password.text!
        ]

        AF.request(URL, method: .post, parameters: loginRequest,encoding: JSONEncoding.default).responseJSON
            {
                response in
                //printing response
                print(response)
                
                if let result = response.result.value {
                    
                    //converting it as NSDictionary
                    let jsonData = result as! NSDictionary
                    
                    let test = jsonData.value(forKey: "error") as! String?
                    
                    if test != "Incorrect Username or Password"{
                        self.performSegue(withIdentifier: "mainPage", sender: self)
                    }
                }
                
            }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }


}

