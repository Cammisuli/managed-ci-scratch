#!/bin/sh
# Prints which env a task sees; secrets only as a hash prefix.
h() { if [ -n "$1" ]; then printf %s "$1" | sha256sum | cut -c1-12; else echo '<unset>'; fi; }
echo "PROBE $1 host=$(hostname) rg=$NX_RUN_GROUP FILE_ENV=${FILE_ENV:-<unset>} JOB_ENV=${JOB_ENV:-<unset>} FOO=$( [ -n "$FOO" ] && echo set || echo "<unset>") DEMO_SECRET=$(h "$DEMO_SECRET") SECRET_FROM_TEMPLATE=$(h "$SECRET_FROM_TEMPLATE")"
sleep 20
