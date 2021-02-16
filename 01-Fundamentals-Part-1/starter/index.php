<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

    //Key might be blurd for privacy. If key is set output is as follows:
    //---------GET request with Bearer token.
    $token = '**************';
    $ch = curl_init('https://api.airtable.com/v0/appAhNU5xlXu8ry7H/Payouts');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch, CURLOPT_XOAUTH2_BEARER,$token);
    curl_setopt($ch, CURLOPT_HTTPHEADER,array(
        'Authorization: Bearer '.$token
    ));
    //raw data is saved here
    $data = curl_exec($ch);
    //print_r($data);
    curl_close($ch);
    
    //The decoded json obj is now in an array so that we can use it to format. This is done with the "boolean" parameter set to true.
    $decode = json_decode($data,true);
    //print_r($decode);
    
    //breaking down the array by the 'records' only and storing it.
    $everyEmployee = $decode['records'];
    
    //------------Call this function if you want to create an array with 'unique' values based on the the specific search field. If the email says use Number field as unique field, then set 2nd parameter to Number or id, else set it to Name.
    function uniqueEmployeesArray($array, $keyToCompareWith)
    {
        //index that helps compare
       $i = 0;
        //stores the temp new formated array
       $tempArray = array();
        // add to this array to compare.
       $keyArray = array();
        foreach($array as $el) {
            if (!in_array($el['fields'][$keyToCompareWith],$keyArray)) {
                $keyArray[$i] = $el['fields'][$keyToCompareWith];
                $tempArray[$i] = $el;
            }
            else
            {
                $index = array_search($el['fields'][$keyToCompareWith], $keyArray);
                $tempArray[$index]['fields']['Amount'] = $tempArray[$index]['fields']['Amount'] + $el['fields']['Amount'];
            }
            $i++;
        }
        return $tempArray;
    }
    
    //get unique data
    $uniqueEmployees = uniqueEmployeesArray($everyEmployee,'Name');
    
    //Now format the amount fields to nearest cent.
    $finalEmployeeData = formatArray($uniqueEmployees);
    
    //---------Call this function if you need to format the amount field in the new array.
    function formatArray($uniqueEmployees)
    {
        
        $index = 0;
        $tempArray = array();
        foreach($uniqueEmployees as $eachEmployee)
        {
          
            $name =$eachEmployee['fields']['Name'];
            $amount = number_format($eachEmployee['fields']['Amount'], 2, '.', '');
            //adding each emp to an array
            $tempArray[$index] = array($name => $amount);
            
            $index++;
        }
        return $tempArray;
    }
    
    $encodedFinalEmployees = json_encode($finalEmployeeData);
    print_r($encodedFinalEmployees);
    
    //email and pw blurd
    //---------POST REQUEST
    $username="*******";
    $password="*******";
    $ch = curl_init('https://auth.da-dev.us/devtest1');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $encodedFinalEmployees);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
    curl_setopt($ch, CURLOPT_USERPWD, "$username:$password");
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($ch);
    print_r($result);
    $info = curl_getinfo($ch);
    curl_close($ch);
    //print_r($info);
?>
    
</body>
</html>
