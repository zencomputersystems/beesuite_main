browser:
	NODE_OPTIONS="--max_old_space_size=4096"
	ionic build --engine=browser --production


refresh:
	git fetch --all --verbose
	git submodule foreach --recursive git fetch --verbose --all


prepare: refresh
	ionic repair
