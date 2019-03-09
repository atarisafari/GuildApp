//
//  RegisterViewController.swift
//  Guild
//
//  Created by Juan Calle on 3/8/19.
//  Copyright © 2019 JCalle. All rights reserved.
//
import Alamofire
import UIKit

class RegisterViewController: UIViewController {

    let URL_USER_REGISTER = "http://157.230.66.35/php/signup.php"
    
    @IBOutlet weak var email: UITextField!
    @IBOutlet weak var password: UITextField!

    @IBOutlet weak var labelMessage: UILabel!
    
    @IBAction func signUp(_ sender: UIButton) {
        let parameters: Parameters=[
            "username":email.text!,
            "password":password.text!
        ]
        
        print(email.text!)

        AF.request(URL_USER_REGISTER, method: .post, parameters: parameters,encoding: JSONEncoding.default).responseJSON
        {
                response in
                //printing response
                print(response)

                //getting the json value from the server
                if let result = response.result.value {

                    //converting it as NSDictionary
                    let jsonData = result as! NSDictionary
                    
                    let test = jsonData.value(forKey: "error") as! String?
                    
                    if test != "Username taken"{
                        self.dismiss(animated: true, completion: nil)
                    }
        

                }
        }
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
