<!-- Page Wrapper -->
<div id="wrapper">

    <div id="halaman-edit"></div>

    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="<?= base_url(); ?>">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
            <a class="nav-link" href="<?= base_url(); ?>">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>

        <!-- Nav Item - Charts -->
        <li class="nav-item">
            <a class="nav-link" href="<?= base_url(); ?>halaman/input">
                <i class="fas fa-fw fa-chart-area"></i>
                <span>Input</span></a>
        </li>

        <!-- Nav Item - Charts -->
        <li class="nav-item">
            <a class="nav-link" href="<?= base_url(); ?>halaman/edit">
                <i class="fas fa-fw fa-chart-area"></i>
                <span>Edit</span></a>
        </li>

        <!-- Nav Item - Charts -->
        <li class="nav-item">
            <a class="nav-link" href="<?= base_url(); ?>halaman/hapus">
                <i class="fas fa-fw fa-chart-area"></i>
                <span>Hapus</span></a>
        </li>

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div class="container">
            <!-- Outer Row -->
            <div id="formproyek" class="row justify-content-center">
                <div class="col-xl-10 col-lg-12 col-md-9">
                    <div class="card o-hidden border-0 shadow-lg my-5 col-lg-9 mx-auto">
                        <div class="card-body p-0">
                            <!-- Nested Row within Card Body -->
                            <div class="row">
                                <div class="col-lg">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Edit Proyek</h1>
                                        </div>
                                        <form class="user" action="javascript:void(0);">
                                            <div class="form-group">
                                                <input type="number" class="form-control form-control-user"
                                                    id="proyek_id" placeholder="Masukkan proyek id...">
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control form-control-user"
                                                    id="nama_proyek" placeholder="Masukkan nama proyek...">
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control form-control-user"
                                                    id="client" placeholder="Masukkan client...">
                                            </div>
                                            <div class="form-group">
                                                <input type="date" class="form-control form-control-user"
                                                    id="tgl_mulai" placeholder="Masukkan tanggal mulai...">
                                            </div>
                                            <div class="form-group">
                                                <input type="date" class="form-control form-control-user"
                                                    id="tgl_selesai" placeholder="Masukkan tanggal selesai...">
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control form-control-user"
                                                    id="pimpinan_proyek" placeholder="Masukkan pimpinan proyek...">
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control form-control-user"
                                                    id="keterangan" placeholder="Masukkan keterangan...">
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-user btn-block" onclick="EditProyek()">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div id="formlokasi" class="row justify-content-center">
                <div class="col-xl-10 col-lg-12 col-md-9">
                    <div class="card o-hidden border-0 shadow-lg my-5 col-lg-9 mx-auto">
                        <div class="card-body p-0">
                            <!-- Nested Row within Card Body -->
                            <div class="row">
                                <div class="col-lg">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Edit Lokasi</h1>
                                        </div>
                                        <form class="user" action="javascript:void(0);">
                                            <div class="form-group">
                                                <input type="number" class="form-control form-control-user"
                                                    id="lokasi_id" placeholder="Masukkan lokasi id...">
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control form-control-user"
                                                    id="nama_lokasi" placeholder="Masukkan nama lokasi...">
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control form-control-user"
                                                    id="negara" placeholder="Masukkan negara...">
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control form-control-user"
                                                    id="provinsi" placeholder="Masukkan provinsi...">
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control form-control-user"
                                                    id="kota" placeholder="Masukkan kota...">
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-user btn-block" onclick="EditLokasi()">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; Your Website 2024</span>
                </div>
            </div>
        </footer>
        <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

</div>
<!-- End of Page Wrapper -->

<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>