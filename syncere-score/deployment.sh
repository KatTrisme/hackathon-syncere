# Adding Optimized Score to test block chain.
#/Users/katlegomatjila/Documents/Hackathons/icon-project/goloop/bin/goloop \
# rpc sendtx deploy ./build/libs/syncere-0.1.0-optimized.jar \
# --uri https://lisbon.net.solidwallet.io/api/v3 \
# --key_store keystore.json --key_password gochain \
# --nid 2 --step_limit 10000000000 \
# --content_type application/java \
# --param title='Shampoo' --param date='Wed Feb 22 20:19:19 UTC 2023' --param recalled=0

/Users/katlegomatjila/Documents/Hackathons/icon-project/goloop/bin/goloop \
 rpc sendtx deploy ./build/libs/syncere-0.1.0-optimized.jar \
 --uri https://lisbon.net.solidwallet.io/api/v3 \
 --key_store keystore.json --key_password gochain \
 --nid 2 --step_limit 10000000000 \
 --content_type application/java

# Verify deployment
/Users/katlegomatjila/Documents/Hackathons/icon-project/goloop/bin/goloop \
 rpc txresult 0xfed7dda73d9248e9141dd3409e03f5a7d4104d4dca61aded7a16c02bfa46af85  \
 --uri https://lisbon.net.solidwallet.io/api/v3

# Running Score commands
/Users/katlegomatjila/Documents/Hackathons/icon-project/goloop/bin/goloop \
 rpc call --to cx22c5bef259052ccab681a161db68aa7a25069c77 \
 --uri https://lisbon.net.solidwallet.io/api/v3 \
 --method getProduct

 /Users/katlegomatjila/Documents/Hackathons/icon-project/goloop/bin/goloop \
  rpc sendtx call --to cx970a25e56c15b2cc69d84c49538660b7880cb6e8 \
  --uri https://lisbon.net.solidwallet.io/api/v3 \
  --key_store keystore.json --key_password gochain \
  --nid 2 --step_limit 10000000000 \
  --method addProduct --param title="Cake" --param date="1999-09-09" --param recalled="0"