{ pkgs }: {
  deps = [
    pkgs.python39
    pkgs.nodejs-16_x
    pkgs.nodePackages.pm2
    pkgs.yarn
    pkgs.python39Packages.pip
  ];
}
