<style>
        body{
                background-color:azure;
        }
</style>
## SVG 

# Shapes :

* ### Line
* ### Rectangle
* ### Circle
* ### Ellipse
* ### Text
---Complex---
* ###  Polygon 
* ###  PolyLine
* ###  Path

***
### Line

```html
<svg width="500" height="500">
        <line x1="100" y1="100" x2="200" y2="200" stroke="red" ></line>
        <line x1="50" y1="100" x2="200" y2="100" stroke="blue" stroke-width="5"></line>
</svg>
    
```
### Rectangle
```html
<svg width="500" height="500">
        <rect x="200" y="100" height="150" width="100"></rect>
        <rect x="50" y="40" height="250" width="100" fill="aqua" stroke="green" stroke-width="4"></rect>
</svg>
```

### Circle
```html
 <svg width="500" height="500">
        <circle cx="100" cy="80" r="50"></circle>
        <circle cx="250" cy="50" r="70" fill="yellow" stroke="red" stroke-width="8"> </circle>
</svg>
```

### Ellipse
```html
<svg width="500" height="500">
        <ellipse cx="100" cy="100" rx="60" ry="80" stroke="red" stroke-width="3" fill="orange"></ellipse>
        <ellipse cx="300" cy="100" rx="20" ry="70" stroke="blue" stroke-width="5"><ellipse>
</svg>
```
### Text
```html
<svg width="500" height="500">
        <text x="180" y="250">This is a text<text>
</svg>
```
### PolyLine 
```html
<svg width="500" height="500">
        <polyline points="20,50 70,100 90,300 200,40" fill="none" stroke="red"></polyline>
        <polyline points="300,400 90,100 110,400 300,200" stroke="aqua" stroke-width="4" fill="blue"></polyline>
</svg>
```

### Polygon
```html
<svg width="500" height="500">
        <polygon points="20,50 70,100 90,300 200,40" fill="none" stroke="red"></polygon>
        <polygon points="300,400 90,100 110,400 300,200" stroke="aqua" stroke-width="4" fill="blue"></polygon>
</svg>
```

### Path

* M --> Move to x,y
* L --> Line to x,y
* l --> line to x,y => lx+x , ly+y  (relative)
* V --> Vertical Line x, y
* v --> vertical line => l
* H --> Horizontal line x,y
* h
* C --> Curve to cx1,cy1 cx2,cy2 ex,ey
* S --> smooth curve cx2,cy2 ex,ey
* Q --> quadratic curvato
* T --> smooth quadratic curve
* Z 

```html
<svg width="500" height="500">
        <path d="M100,50 L300,250 l40,200" stroke="blue" fill="aqua"></path>
        <path d="M50,50 V300,250 C300,100 100,400" stroke="blue" fill="aqua"></path>
        <path d="M50,50 H300,250 c300,100 100,400 100,420" stroke="blue" fill="green"></path>
</svg>
```


### Stroke

1. => Stroke   --> BorderColor .
2. => Stroke-width --> Border-size .
3. => Stroke-linecap --> Makes the Border styled 
 ### Values  for Stroke-linecap:
 * butt(default)
 * round
 * square
  
4. => Stroke-dasharray --> Space needed between the lines  border .  Values => Numbers
5. Stroke Opacity --> defines the opacity 





```html
<svg width="500" height="500">
        <line x1="100" y1="100" x2="200" y2="200" stroke="red" stroke-width="8"></line>
        <rect x="200" y="10" width="80" height="80" fill="pink" stroke="green" stroke-width="1" ></rect>
        <line x1="300" y1="200" x2="300" y2="20" stroke="blue" stroke-width="8" stroke-linecap="round"></line>
        <rect x="80" y="5" width="100" height="80" fill="orange" stroke="green" stroke-width="3" stroke-dasharray="4" ></rect>
</svg>

```

### Group --> Just a way to reuse the code like the div or component in the react . used to give to attributes and the values for the elements .
```html
<g>

</g>
```
## ADVANCED
* defs
* symbol
* pattern
* clip-path

# defs 
```html
<svg width="500" height="500">
       <defs>
           <rect id="rect1" x="50" y="70" width="100" height="300" fill="orange"></rect>
       </defs> 

       <use href="#rect1"></use>
</svg>
```




# :fire: :warning:Advanced concepts like gradient, filter and animation are not covered in this repository .