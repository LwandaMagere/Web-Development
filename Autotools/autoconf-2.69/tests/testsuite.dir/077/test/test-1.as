AS_INIT
m4_divert_text([], [
if false; then
  AS_UNSET([LINENO])
fi
])
AS_LINENO_PREPARE
echo "Line: $LINENO"
grep 'Line: .*LINENO' "$[0]" >/dev/null ||
  AS_ERROR([cannot find original script])
exit 0