var tipuesearch = {"pages":[{"title":"About","text":"Dr.Gowrishankar S. is currently working as Associate Professor in the Department of Computer Science and Engineering at Dr.Ambedkar Institute of Technology, Bengaluru, India. He earned his PhD in Engineering from Jadavpur University, Kolkata, India in 2010 and MTech in Software Engineering and BE in Computer Science and Engineering from Visvesvaraya Technological University ( VTU ), Belagavi, India, in the years 2005 and 2003 respectively. From 2011 to 2014 he worked as Senior Research Scientist and Tech Lead at Honeywell Technology Solutions, Bengaluru, India. He has been awarded with the Technical and Innovation Award and Individual Excellence Award for his contribution towards successful delivery of projects at Honeywell Technology Solutions. He has published several papers in various reputed International Journals and Conferences. He is serving as editor and reviewer for various prestigious International Journals. He is also member of IEEE , ACM , CSI and ISTE . He has delivered many keynote addresses and invited talks throughout India on a variety of subjects related to Computer Science and Engineering. He was instrumental in organizing several conferences, workshops and seminars. He has also served on the panel of number of Academic Bodies of Universities and Autonomous Colleges as a BOS and BOE member. His current research interests are mainly focused on Data Science, including its technical aspects as well as its applications and implications. Specifically, he is interested in the applications of Machine Learning, Data Mining and Big Data analytics in Healthcare.His Twitter handle is @g_s_nath.","tags":"pages","url":"/about.html","loc":"/about.html"},{"title":"Contact","text":"Feel free to get in touch via the form below, or just send an email to gowrishankarnath@acm.org Your name Your email Your message","tags":"pages","url":"/contact.html","loc":"/contact.html"},{"title":"Disclaimer","text":"I want to emphasize that this is my personal blog, and the opinions expressed here are mine, and not that of my current or former employer's or anyone else in any way. I speak only for myself, not for them.","tags":"pages","url":"/disclaimer.html","loc":"/disclaimer.html"},{"title":"Remote Programming of Raspberry Pi using PyCharm","text":"This tutorial is about using PyCharm IDE on a Windows machine to remotely execute Python 2.7 programs on Raspberry Pi. Despite my best efforts, I could not find a step by step tutorial on how to remotely connect PyCharm to Raspberry Pi and use the Raspberry Pi python interpreter to execute the programs. So I'm listing out the steps here. This tutorial is tested on a Windows 10 machine and Raspberry Pi running Raspbian OS . Step 1: Ensure the Windows Machine and Raspberry Pi are part of the same Network. Step 2: Install PyCharm Professional Edition on your Windows machine. Step 3: You need to get the IP Address of Raspberry Pi. To do so, open the Terminal window on raspberry pi and type the following command ifconfig As can be seen from the screenshot, Raspberry Pi is connected to the Wireless LAN and the address is 172.16.2.100. It may vary on your Raspberry Pi. Make a note of this address. Step 4: Once you have obtained the Address, go to your home directory and create a folder as shown in the below screenshot. This folder is used to store the Python programs. Step 5: Invoke your PyCharm IDE . Create a new Project. Go to File —> New Project —> Pure Python —> Give a Project Name. In my case it is RaspberryPiProject. Step 6: Right Click on RaspberryPiProject and select New —> Python File and give a name to python file. In my case it is rasp.py Step 7: Write the line print \"Hello RaspberryPi\" in the editor. Step 8: Now go to File —> Settings On the left pane of the window you should see Project:RaspberryPiProject. (If you have given a different name then it may differ from what is displayed here) Expand it and Click on Project Interpreter On the right pane of the window, click at the end of Project Interpreter and select Add Remote option as shown below. A Remote Python Interpreter window pops up. Step 9: Configure the Remote Python Interpreter window. Write the IP address of the Raspberry Pi you earlier made note of in the Host option. Give the user name and password. Specify the Python interpreter path on raspberry pi. Click OK . Now you should see the Python Interpreter found in Raspberry Pi. Step 10: Now go to Tools —> Deployment —> Configuration and click on + sign on the left pane. You should see a window. At this stage Raspberry Pi will be treated as a Server machine. Give a name to your Raspberry Pi server (in my case it is GS_Research) and select the type as SFTP and click OK Step 11: Click on the Connections tab and specify the IP address of the Raspberry Pi again in SFTP host Leave the port and Root path as it is. Specify the User Name and Password Then click on Mappings tab. Specify the local path where you have stored the python project in the Windows machine. Then specify the path which we had created to store the Python programs on raspberry pi i.e., /home/pi/pywork and click OK . Step 12: Now we need to upload the Python file created on a Windows machine on to Raspberry Pi and compile the program using Raspberry Pi Python Interpreter. Go to Tools —> Deployment —> Upload to GS_Research. Remember, here GS_Research is the name given to the Raspberry Pi server. At the bottom pane, you can see that the file is successfully uploaded. Now open the terminal window again on the Raspberry Pi and go to the path where you intended to store Python programs. If you have followed the instructions then the path is /home/pi/pywork. You should see the rasp.py file in there. Step 13: You need to sync the Python code with Raspberry Pi as and when you write your code in PyCharm. To do that go to Tools —> Deployment —> Sync with Deployed to GS_Research. Happy Coding…","tags":"Articles","url":"/remote-programming-of-raspberry-pi-using-pycharm.html","loc":"/remote-programming-of-raspberry-pi-using-pycharm.html"},{"title":"Generate Fake Data Programmatically Using Faker With Python","text":"Introduction Recently, I had a requirement to fill the database with some data. Filling the tables manually proved to be very tedious enough. So, I was looking for some software that could do the heavy lifting for me and also that could be used with Python natively. Voila!! After a bit of search came across this awesome software. FAKER Faker can be used to generate fake data which resembles the real world values rather than some gibberish values. Using FAKER With Python The following code has been tested using Python 3.5 on a Windows 10 machine. Type the below command in the Command Prompt to install Faker module Let's start with a very simple example. Import the faker module and make use of the Factory Class. Use create() method to create an object called fake. Say, if you want to print a name then use the object fake along with name() method as shown below. from faker import Factory fake = Factory . create () print ( fake . name ()) Output Mrs. Kenley Farrell You can even localize the names according to your preferences. For e.g, if you want to display name in Hindi (India), then pass the string argument \"hi_IN\" to create() method. from faker import Factory fake = Factory . create ( \"hi_IN\" ) print ( fake . name ()) Ouput रचना बाबू If you want to display 10 random currencies from faker import Factory fake = Factory . create () for i in range ( 10 ): print ( fake . currency_code ()) Output MWK MRO KES TOP IQD MYR PGK MDL NIO MNT You can randomly generate addresses using address() method. Below code is localized for \"en_US\". from faker import Factory fake = Factory . create ( \"en_US\" ) for i in range ( 10 ): print ( fake . address ()) Output PSC 7452, Box 9044 APO AA 06906-4518 65264 Vince Points Suite 897 North Pearlene, PA 66031 63876 Daijah Pass New Rickiland, NM 82820 59116 Mueller Port South Rosanne, IN 07663 486 Jerde Forest New Keyshawnfort, GA 59913-5859 360 Orie Forge Lake Izayah, NY 83459-8476 1840 O'Connell Field Apt. 566 Port Zakaryton, HI 66433-8319 PSC 2512, Box 6095 APO AP 37389 89957 Williamson Burg Apt. 255 Shelliview, WY 06711-9241 78580 Vanessa Square Apt. 095 West Sherie, CT 67665 You can generate various information about a person using different methods as shown below. from faker import Factory fake = Factory . create ( \"en_US\" ) print ( fake . last_name_male ()) print ( fake . name_female ()) print ( fake . prefix_male ()) print ( fake . prefix ()) print ( fake . name ()) print ( fake . suffix_female ()) print ( fake . name_male ()) print ( fake . first_name ()) print ( fake . suffix_male ()) print ( fake . suffix ()) print ( fake . first_name_male ()) print ( fake . first_name_female ()) print ( fake . last_name_female ()) print ( fake . last_name ()) print ( fake . prefix_female ()) Output Morar Dr. Mckinley Halvorson Dr. Mrs. Kadeem Parker MD Mr. Elliott Padberg Elvira III IV Arley Mariam Turner Huel Ms. You can read various methods available in Faker Module in detail @ https://faker.readthedocs.io/en/master/# You can find the above code @ https://github.com/gowrishankarnath/FakerPythonExamples","tags":"Articles","url":"/generate-fake-data-programmatically-using-faker-with-python.html","loc":"/generate-fake-data-programmatically-using-faker-with-python.html"},{"title":"Introduction to Python Programming","text":"Introduction to Python Programming . The Git repository for the book containing the code examples from the book \"Introduction to Python Programming\" , authored by Gowrishankar S. and Veena A. and published by CRC Press can be found here . Book Purchase You can purchase the book at following sources ​ Book Details Hardcover: 464 pages Publisher: Chapman and Hall/ CRC Press; 1 edition (November 7, 2018) Language: English ISBN -10: 0815394373 ISBN -13: 978-0815394372 Software Requirements All the code in the book works with Python 3.6 version or above. Since f -strings are used throughout the book which was introduced in Python 3.6 version, you need to have Python interpreter 3.6 or above for the code to work as it is. Install the latest version of 64-bit Anaconda Distribution with support for Python 3.6 or above. If you want to make the code work with Python 3.1 to 3.5 versions, use str.format() statements within the print() function instead of f-strings. The rest of the statements within the code remains the same and the code should work fine. It is highly recommended that you use the latest version of PyCharm Community Edition to execute the programs. You will gain valuable insights in to Python programming language by using this IDE , no matter whether you are a beginner or an experienced professional. Book Source Code You need to download the folder Book_Code and open it in PyCharm IDE . Each of the code files are numbered and they appear under a Chapter number. The numbering of the code files corresponds to the order in which they appear in the book. Each of the code file is a self-contained file. To run a code file, right-click on the file name in the PyCharm IDE and select the \"Run\" from the context menu. Who Should Read This Book? This book is for beginners to Python programming who are interested in learning the basics of Python programming language. Citing this Book You are very welcome to re-use the code snippets for academic purpose; in this case, we would appreciate citations to the original source: BibTeX: @Book{gsva2018python, author = {Gowrishankar S., Veena A.}, title = {Introduction to Python Programming}, publisher = {Chapman and Hall/ CRC Press}, year = {2018}, address = {Boca Raton, USA }, isbn = {0815394373} } MLA : S, Gowrishankar, and Veena A. Introduction to Python Programming. Chapman & Hall/ CRC Press, 2018. Contributing to the book Please don't make pull requests here. I don't accept pull requests on this repository. If you notice an issue, please file an issue instead. Errata We hope to improve this book continually. If you have any suggestions for improving this text or if an error should be found, the authors would be grateful if notification were sent by e-mail to gowrishankarnath@acm.org. To ensure your messages do not end up in our junk mail folder, please include subject as \"Introduction to Python Programming.\" You can see a list of known issues that have been found in each chapter by looking at Errata and the corresponding corrections. If you found a mistake and don't see it listed there, please create a new issue . Thank you for your help! Contact If you are interested in keeping in touch, I am active on twitter and my id is @g_s_nath . Table of Contents 1. Introduction 1.1 What Is a Program? 1.2 Programming Languages 1.3 Software Development 1.4 History of Python Programming Language 1.5 Thrust Areas of Python 1.6 Installing Anaconda Python Distribution 1.7 Installing PyCharm IDE to Set Up a Python Development Environment 1.8 Creating and Running Your First Python Project 1.9 Installing and Using Jupyter Notebook 1.10 Open Source Software 1.11 Summary Multiple Choice Questions Review Questions 2. Parts of Python Programming Language 2.1 Identifiers 2.2 Keywords 2.3 Statements and Expressions 2.4 Variables 2.5 Operators 2.6 Precedence and Associativity 2.7 Data Types 2.8 Indentation 2.9 Comments 2.10 Reading Input 2.11 Print Output 2.12 Type Conversions 2.13 The type() Function and Is Operator 2.14 Dynamic and Strongly Typed Language 2.15 Summary Multiple Choice Questions Review Questions 3. Control Flow Statements 3.1 The if Decision Control Flow Statement 3.2 The if…else Decision Control Flow Statement 3.3 The if…elif…else Decision Control Statement 3.4 Nested if Statement 3.5 The while Loop 3.6 The for Loop 3.7 The continue and break Statements 3.8 Catching Exceptions Using try and except Statement 3.9 Summary Multiple Choice Questions Review Questions 4. Functions 4.1 Built-In Functions 4.2 Commonly Used Modules 4.3 Function Definition and Calling the Function 4.4 The return Statement and void Function 4.5 Scope and Lifetime of Variables 4.6 Default Parameters 4.7 Keyword Arguments 4.8 *args and **kwargs 4.9 Command Line Arguments 4.10 Summary Multiple Choice Questions Review Questions 5. Strings 5.1 Creating and Storing Strings 5.2 Basic String Operations 5.3 Accessing Characters in String by Index Number 5.4 String Slicing and Joining 5.5 String Methods 5.6 Formatting Strings 5.7 Summary Multiple Choice Questions Review Questions 6. Lists 6.1 Creating Lists 6.2 Basic List Operations 6.3 Indexing and Slicing in Lists 6.4 Built-In Functions Used on Lists 6.5 List Methods 6.6 The del Statement 6.7 Summary Multiple-Choice Questions Review Questions 7. Dictionaries 7.1 Creating Dictionary 7.2 Accessing and Modifying key:value Pairs in Dictionaries 7.3 Built-In Functions Used on Dictionaries 7.4 Dictionary Methods 7.5 The del Statement 7.6 Summary Multiple Choice Questions Review Questions 8. Tuples and Sets 8.1 Creating Tuples 8.2 Basic Tuple Operations 8.3 Indexing and Slicing in Tuples 8.4 Built-In Functions Used on Tuples 8.5 Relation between Tuples and Lists 8.6 Relation between Tuples and Dictionaries 8.7 Tuple Methods 8.8 Using zip() Function 8.9 Sets 8.10 Set Methods 8.10.1 Traversing of Sets 8.11 Frozenset 8.12 Summary Multiple Choice Review Questions 9. Files 9.1 Types of Files 9.2 Creating and Reading Text Data 9.3 File Methods to Read and Write Data 9.4 Reading and Writing Binary Files 9.5 The Pickle Module 9.6 Reading and Writing CSV Files 9.7 Python os and os.path Modules 9.8 Summary Multiple Choice Questions Review Questions 10. Regular Expression Operations 10.1 Using Special Characters 10.2 Regular Expression Methods 10.3 Named Groups in Python Regular Expressions 10.4 Regular Expression with glob Module 10.5 Summary Multiple Choice Questions Review Questions 11. Object-Oriented Programming 11.1 Classes and Objects 11.2 Creating Classes in Python 11.3 Creating Objects in Python 11.4 The Constructor Method 11.5 Classes with Multiple Objects 11.6 Class Attributes versus Data Attributes 11.7 Encapsulation 11.8 Inheritance 11.9 The Polymorphism 11.10 Summary Multiple Choice Questions Review Questions 12. Introduction to Data Science 12.1 Functional Programming 12.2 JSON and XML in Python 12.3 NumPy with Python 12.4 Pandas 12.5 Altair 12.6 Summary Multiple Choice Questions Review Questions","tags":"Book","url":"/introduction-to-python-programming.html","loc":"/introduction-to-python-programming.html"}]};