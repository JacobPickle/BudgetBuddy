### Ensure Git is installed
'''
Sudo apt-get install git
'''

### Installing Ruby and Nodejs
##### Installing dev dependencies
'''
sudo apt-get install git-core zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev
'''

##### Installing ASDF
'''
git clone https://github.com/excid3/asdf.git ~/.asdf
echo '. "$HOME/.asdf/asdf.sh"' >> ~/.bashrc
echo '. "$HOME/.asdf/completions/asdf.bash"' >> ~/.bashrc
echo 'legacy_version_file = yes' >> ~/.asdfrc
echo 'export EDITOR="code --wait"' >> ~/.bashrc
exec $SHELL
'''

##### Install ruby
'''
asdf plugin add ruby
asdf install ruby 3.2.2
asdf global ruby 3.2.2
gem update --system
'''

##### Install nodejs
'''
asdf plugin add nodejs
asdf install nodejs 18.16.1
asdf global nodejs 18.16.1
'''

### Installing postgres
##### Install dependencies
'''
sudo apt install postgresql libpq-dev
'''

##### Add a deploy user
Use "deploy" as the name and respond "Y" for superuser
'''
sudo -u postgres createuser --interactive
sudo -u postgres psql
postgres=# \password deploy
'''

### Running the application
##### Clone the project
'''
Git clone https://github.com/JacobPickle/BudgetBuddy
Cd BudgetBuddy
'''

##### Needed for local development
Add ‘host: localhost’ under default in config/database.yml

##### Setup Commands
'''
Bundle install
Npm install
Npm run build

Setup Database
Rails db:setup

Run the server
Bundle exec rails server
'''
