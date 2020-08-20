# Images adjusting
Generated derivative images for srcset from a custom dirs sturcture and optimizes them

### Install required software
```
sudo bash scripts/install_imagemagick.sh
```

### Install packages
```
bash scripts/install_deps.sh
```
### Adjust gulpfile.js to your need
##### Example:
```
const images = [
    {
        widths: [425, 786, 1920],
        path: 'images'
    },
    ...
```
### Run gulp
```
gulp
```
