import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:url_launcher/url_launcher.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Popup Dialog Example',
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  Future<void> _showPopupDialog(BuildContext context) async {
    return showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Announcement'),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                Text('New Scheme Started on December'),
                Text('2021'),
              ],
            ),
          ),
          actions: <Widget>[
            TextButton(
              child: Text('Yes'),
              onPressed: () {
                // Close the dialog
                Navigator.of(context).pop();

                // Navigate to the ImageSliderPage
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => ImageSliderPage()),
                );
              },
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        flexibleSpace: Image(
          // Replace with your image path
          image: AssetImage('../assets/images/logo.jpg'),
          fit: BoxFit.cover,
        ),
        title: Text(''),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Padding(
            padding: EdgeInsets.all(50.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: <Widget>[
                Flexible(
                  // Make the image responsive
                  child: GestureDetector(
                    onTap: () {
                      _showPopupDialog(context);
                    },
                    child: Image.asset(
                        '../assets/images/image1.jpg'), // Replace with your image path
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: EdgeInsets.all(50.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: <Widget>[
                Flexible(
                  // Make the image responsive
                  child: GestureDetector(
                    onTap: () {
                      _showPopupDialog(context);
                    },
                    child: Image.asset(
                        '../assets/images/image2.jpg'), // Replace with your image path
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: EdgeInsets.all(20.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                InkWell(
                  onTap: () async {
                    const facebookUrl =
                        'https://www.facebook.com/your-facebook-profile-url';
                    if (await canLaunch(facebookUrl)) {
                      await launch(facebookUrl);
                    } else {
                      throw 'Could not launch $facebookUrl';
                    }
                  },
                  child: Icon(FontAwesomeIcons.facebook),
                ),
                InkWell(
                  onTap: () async {
                    const twitterUrl =
                        'https://twitter.com/your-twitter-profile-url';
                    if (await canLaunch(twitterUrl)) {
                      await launch(twitterUrl);
                    } else {
                      throw 'Could not launch $twitterUrl';
                    }
                  },
                  child: Icon(FontAwesomeIcons.twitter),
                ),
                InkWell(
                  onTap: () async {
                    const instagramUrl =
                        'https://www.instagram.com/fresh_spar/';
                    if (await canLaunch(instagramUrl)) {
                      await launch(instagramUrl);
                    } else {
                      throw 'Could not launch $instagramUrl';
                    }
                  },
                  child: Icon(FontAwesomeIcons.instagram),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class ImageSliderPage extends StatefulWidget {
  const ImageSliderPage({Key? key}) : super(key: key);

  @override
  State<ImageSliderPage> createState() => _ImageSliderPageState();
}

class _ImageSliderPageState extends State<ImageSliderPage> {
  List imageList = [
    {"id": 1, "image_path": '../assets/images/one.jpg'},
    {"id": 2, "image_path": '../assets/images/two.jpg'},
    {"id": 3, "image_path": '../assets/images/three.jpg'},
    {"id": 4, "image_path": '../assets/images/four.jpg'},
    {"id": 5, "image_path": '../assets/images/five.jpg'},
    {"id": 6, "image_path": '../assets/images/six.jpg'},
    {"id": 7, "image_path": '../assets/images/seven.jpg'},
    {"id": 8, "image_path": '../assets/images/eight.jpg'},
  ];
  final CarouselController carouselController = CarouselController();
  int currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: null, // Set the AppBar to null to remove it
      body: Column(
        children: [
          Stack(
            children: [
              InkWell(
                onTap: () {
                  print(currentIndex);
                },
                child: CarouselSlider(
                  items: imageList
                      .map(
                        (item) => Image.asset(
                          item['image_path'],
                          fit: BoxFit.cover,
                          width: double.infinity,
                        ),
                      )
                      .toList(),
                  carouselController: carouselController,
                  options: CarouselOptions(
                    scrollPhysics: const BouncingScrollPhysics(),
                    autoPlay: true,
                    aspectRatio: 2,
                    viewportFraction: 1,
                    height: 800,
                    onPageChanged: (index, reason) {
                      setState(() {
                        currentIndex = index;
                      });
                    },
                  ),
                ),
              ),
              Positioned(
                bottom: 10,
                left: 0,
                right: 0,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: imageList.asMap().entries.map((entry) {
                    return GestureDetector(
                      onTap: () => carouselController.animateToPage(entry.key),
                      child: Container(
                        width: currentIndex == entry.key ? 17 : 7,
                        height: 7.0,
                        margin: const EdgeInsets.symmetric(
                          horizontal: 3.0,
                        ),
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(10),
                            color: currentIndex == entry.key
                                ? Colors.red
                                : Colors.teal),
                      ),
                    );
                  }).toList(),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
